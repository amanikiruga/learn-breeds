import { useState } from "react";
import GameOver from "./GameOver";
import MainStage from "./MainStage";
import { DogBreeds } from "./services/DogAPI";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogBreed, setDogBreed] = useState("");
    const [isGameOn, setIsGameOn] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);
    const [latestScore, setLatestScore] = useState(0);

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
        setLatestScore(0);
        setIsGameOn(true);
        setShowGameOver(false);
    };
    const onGoBackToHome = () => {
        setLatestScore(0);
        setIsGameOn(false);
        setShowGameOver(false);
    };
    const onGameOver = (curScore: number) => {
        setLatestScore(curScore);
        setIsGameOn(false);
        setShowGameOver(true);
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
        return <GameOver finalScore={latestScore}></GameOver>;
    else
        return (
            <div>
                <h1> Learn Breeds</h1>
            </div>
        );
};

export default App;
