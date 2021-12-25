import { useRef, useState } from "react";
import GameOver from "./components/GameOver";
import MainStage from "./components/MainStage";
import PastScores from "./components/PastScores";
import mainLogo from "./res/learn-breeds-icon.png";
import {
    deleteAllScores,
    getAllScores,
    saveScoreDatabase,
    ScoreType,
} from "./services/ScoreRepo";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ74hwi5Vu1qkL9zRhWetcDour4Wq7a44",
    authDomain: "learn-breeds.firebaseapp.com",
    projectId: "learn-breeds",
    storageBucket: "learn-breeds.appspot.com",
    messagingSenderId: "64861816726",
    appId: "1:64861816726:web:1ef13668f9beb9ca833fb7",
    measurementId: "G-JCG8K2W694",
};

// Initialize Firebase
const appFB = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFB);
const db = getFirestore();
const auth = getAuth();

export type DogType = {
    message: string;
    status: string;
};
type PersonalBest = {
    easy: number;
    hard: number;
};
const App = () => {
    const [isGameOn, setIsGameOn] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);
    const [showPastScores, setShowPastScores] = useState(false);
    const [pastScoresList, setPastScoresList] = useState<ScoreType[]>([]);
    const [latestScore, setLatestScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState("easy"); //easy or hard
    const curTimer = useRef<NodeJS.Timeout | null>(null);
    const [isSignedn, setIsSignedIn] = useState(false); //signed in or not
    const [personalBest, setPersonalBest] = useState<PersonalBest>({
        easy: 0,
        hard: 0,
    }); //personal best score
    const [uuid, setUuid] = useState("");

    //sign in users anonymously
    signInAnonymously(auth)
        .then(() => {
            setIsSignedIn(true);
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    // User is signed in, see docs for a list of available properties
                    // https://firebase.google.com/docs/reference/js/firebase.User
                    setUuid(user.uid);
                    // ...
                } else {
                    setUuid("");
                    // User is signed out
                    // ...
                }
            });
            // Signed in..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
        });

    const onRestartGame = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        setLatestScore(0);
        setIsGameOn(true);
        setShowGameOver(false);
        setShowPastScores(false);
    };
    const onGoBackToHome = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        setLatestScore(0);
        setIsGameOn(false);
        setShowGameOver(false);
        setShowPastScores(false);
    };
    const onShowPastScores = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        const allPastScores = getAllScores();

        setPastScoresList(allPastScores);
        setLatestScore(0);
        setIsGameOn(false);
        setShowGameOver(false);
        setShowPastScores(true);
    };
    const onGameOver = (curScore: number) => {
        const timer = setTimeout(async () => {
            setLatestScore(curScore);
            let curDate = new Date().toISOString();

            if (currentLevel == "easy")
                setPersonalBest({
                    ...personalBest,
                    easy: Math.max(curScore, personalBest.easy),
                });
            else
                setPersonalBest({
                    ...personalBest,
                    hard: Math.max(curScore, personalBest.hard),
                });
            let latestScore = {
                "highscore-easy": personalBest.easy,
                "highscore-hard": personalBest.hard,
                date: curDate,
            };
            //save score to firebase
            if (uuid) await setDoc(doc(db, "users", uuid), latestScore);

            setIsGameOn(false);
            setShowGameOver(true);
            setShowPastScores(false);
        }, 1000);
        curTimer.current = timer;
    };

    const onClearScores = () => {
        deleteAllScores();
        const allPastScores = getAllScores();
        setPastScoresList(allPastScores);
    };

    if (isGameOn)
        return (
            <div>
                <div>
                    <MainStage
                        onGoBackToHome={onGoBackToHome}
                        onGameOver={onGameOver}
                        initialRoundTimeInSeconds={15}
                        currentLevel={currentLevel}
                    ></MainStage>
                </div>
            </div>
        );
    else if (showGameOver)
        return (
            <GameOver
                finalScore={latestScore}
                onRestartGame={onRestartGame}
                onGoBackToHome={onGoBackToHome}
            ></GameOver>
        );
    else if (showPastScores)
        return (
            <PastScores
                onClearScores={onClearScores}
                pastScoresList={pastScoresList}
                onGoBackToHome={onGoBackToHome}
            ></PastScores>
        );
    else
        return (
            <div className="home_screen">
                <img
                    src={mainLogo}
                    alt="main logo"
                    height={80}
                    width={80}
                ></img>
                <h1 id="home_screen_heading"> Paws a Litter</h1>
                <button className="button" onClick={onRestartGame}>
                    Start Game
                </button>
                <button className="button" onClick={onShowPastScores}>
                    Show Past Scores
                </button>
                <div className="level-selector">
                    Breed Variety:
                    <div
                        className={`level easy ${
                            currentLevel === "easy" ? "chosen-level" : ""
                        }`}
                        onClick={() => setCurrentLevel("easy")}
                    >
                        Easy
                    </div>
                    <div
                        className={`level hard ${
                            currentLevel === "hard" ? "chosen-level" : ""
                        }`}
                        onClick={() => setCurrentLevel("hard")}
                    >
                        Hard
                    </div>
                </div>
            </div>
        );
};

export default App;
