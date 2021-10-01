import { useRef, useState } from "react";
import GameOver from "./GameOver";
import MainStage from "./MainStage";
import PastScores from "./PastScores";
import { DogBreeds } from "./services/DogAPI";
import {
    getAllScores,
    saveScoreDatabase,
    ScoreType,
} from "./services/ScoreRepo";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogBreed, setDogBreed] = useState("");
    const [isGameOn, setIsGameOn] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);
    const [showPastScores, setShowPastScores] = useState(false);
    const [pastScoresList, setPastScoresList] = useState<ScoreType[]>([]);
    const [latestScore, setLatestScore] = useState(0);
    const curTimer = useRef<NodeJS.Timeout | null>(null);

    const randomDogBreedGenerator = () => {
        return Math.floor(Math.random() * Object.keys(DogBreeds).length);
    };
    const [randomDogBreedIndex, setRandomDogBreedIndex] = useState(
        randomDogBreedGenerator()
    );

    const onNext = (isAnswer: boolean) => {
        // if (isAnswer) setCurScore(curScore + 15);
        console.log("incremented Score");
        // setRandomDogBreedIndex(-1);
        setRandomDogBreedIndex(randomDogBreedGenerator());
    };

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
        const timer = setTimeout(() => {
            setLatestScore(curScore);
            let latestScore = {
                score: curScore,
                date: new Date().toISOString(),
            };
            saveScoreDatabase(latestScore);
            setIsGameOn(false);
            setShowGameOver(true);
            setShowPastScores(false);
        }, 1000);
        curTimer.current = timer;
    };
    if (isGameOn)
        return (
            <div>
                <button onClick={() => setDogBreed("Retriever")}>
                    Retriever
                </button>
                <button onClick={() => setDogBreed("Rottweiler")}>
                    Rottweiler
                </button>
                <button onClick={() => setDogBreed("Chihuahua")}>
                    Chihuahua
                </button>

                <div>
                    <MainStage
                        onGameOver={onGameOver}
                        initialRoundTimeInSeconds={15}
                        onNext={onNext}
                        dogBreedToQuery={DogBreeds}
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
                pastScoresList={pastScoresList}
                onGoBackToHome={onGoBackToHome}
            ></PastScores>
        );
    else
        return (
            <div>
                <h1> Learn Breeds</h1>
                <button onClick={onRestartGame}>Start Game</button>
                <button onClick={onShowPastScores}>Show Past Scores</button>
            </div>
        );
};

export default App;
