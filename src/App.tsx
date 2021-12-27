import { useEffect, useRef, useState } from "react";
import GameOver from "./components/GameOver";
import MainStage from "./components/MainStage";
import HighScores from "./components/HighScores";

import mainLogo from "./res/learn-breeds-icon.png";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc,
    collection,
    getDocs,
    query,
    orderBy,
    enableIndexedDbPersistence,
    getDoc,
} from "firebase/firestore";
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
//enable persistence
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

export type UserType = {
    uuid: string;
    username: string;
    "highscore-easy": number;
    "highscore-hard": number;
    lastUpdated: string;
};

const App = () => {
    const [isGameOn, setIsGameOn] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);
    const [userName, setUserName] = useState("");
    const [userList, setUserList] = useState<UserType[]>([]);
    const [showHighScores, setShowHighScores] = useState(false);
    const [latestScore, setLatestScore] = useState(0);
    const [currentLevel, setCurrentLevel] = useState("easy"); //easy or hard
    const [highScoreLevel, setHighScoreLevel] = useState<"easy" | "hard">(
        "easy"
    ); //set which level to show high score
    const curTimer = useRef<NodeJS.Timeout | null>(null);
    const [isSignedIn, setIsSignedIn] = useState(false); //signed in or not
    const [initializedState, setInitializedState] = useState(false); //initialized or not
    const [personalBest, setPersonalBest] = useState<PersonalBest>({
        easy: 0,
        hard: 0,
    }); //personal best score
    const [uuid, setUuid] = useState("");

    const handleOnChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.currentTarget.value);
    };
    //sign in users anonymously
    useEffect(() => {
        signInAnonymously(auth)
            .then(() => {
                setIsSignedIn(true);
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setIsSignedIn(true);
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/firebase.User
                        setUuid(user.uid);
                        getDoc(doc(db, "users", user.uid)).then((doc) => {
                            if (doc.exists()) {
                                const data = doc.data();
                                setPersonalBest({
                                    easy: data["highscore-easy"],
                                    hard: data["highscore-hard"],
                                });
                                setUserName(data.username);
                            }
                            setInitializedState(true);
                        });

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
    }, []);

    const onRestartGame = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        setLatestScore(0);
        setIsGameOn(true);
        setShowGameOver(false);
        setShowHighScores(false);
    };
    const onGoBackToHome = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        setLatestScore(0);
        setIsGameOn(false);
        setShowGameOver(false);
        setShowHighScores(false);
    };
    const onShowHighScores = () => {
        if (curTimer.current) clearTimeout(curTimer.current);
        setLatestScore(0);
        setIsGameOn(false);
        setShowGameOver(false);
        setShowHighScores(true);
    };
    //update the user list from firestore
    useEffect(() => {
        if (!showHighScores) return;
        getDocs(
            query(
                collection(db, "users"),
                orderBy(`highscore-${highScoreLevel}`, "desc")
            )
        )
            .then((docs) => {
                let curUserList: UserType[] = [];
                docs.forEach((doc) => {
                    curUserList.push(doc.data() as UserType);
                });
                setUserList(curUserList);
                console.log(curUserList);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [showHighScores, highScoreLevel]);

    //save the latest personal best to firestore
    useEffect(() => {
        if (!initializedState) return; //if not initalized, do nothing
        let scoreToSave = {
            "highscore-easy": personalBest.easy,
            "highscore-hard": personalBest.hard,
        };
        console.log("this is the uuid", uuid);
        //save score to firebase
        const saveScore = async () => {
            if (uuid)
                await setDoc(doc(db, "users", uuid), {
                    ...scoreToSave,
                    username: userName,
                    uuid,
                    lastUpdated: new Date().toISOString(),
                });
        };
        saveScore();
    }, [userName, personalBest, uuid]);

    const onGameOver = (curScore: number) => {
        setLatestScore(curScore);

        if (currentLevel === "easy")
            setPersonalBest({
                ...personalBest,
                easy: Math.max(curScore, personalBest.easy),
            });
        else
            setPersonalBest({
                ...personalBest,
                hard: Math.max(curScore, personalBest.hard),
            });

        const timer = setTimeout(() => {
            setIsGameOn(false);
            setShowGameOver(true);
            setShowHighScores(false);
        }, 1000);
        curTimer.current = timer;
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
    else if (showHighScores)
        return (
            <HighScores
                highScoreLevel={highScoreLevel}
                setHighScoreLevel={setHighScoreLevel}
                userList={userList}
                onGoBackToHome={onGoBackToHome}
            ></HighScores>
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
                <div className="username">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        value={userName}
                        onChange={handleOnChangeUsername}
                    ></input>
                </div>

                <button className="button" onClick={onRestartGame}>
                    Start Game
                </button>
                <button className="button" onClick={onShowHighScores}>
                    Show High Scores
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
                <div
                    style={{ textAlign: "center", marginTop: "30px" }}
                    className="user-stats"
                >
                    <h3> Your Stats</h3>
                    Personal Best (Easy): {personalBest.easy} <br /> Personal
                    Best (Hard): {personalBest.hard}
                </div>
            </div>
        );
};

export default App;
