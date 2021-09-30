import { useState } from "react";
import MainStage from "./MainStage";
import { DogBreeds } from "./services/DogAPI";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogBreed, setDogBreed] = useState("");

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
    return (
        <div>
            <button onClick={() => setDogBreed("Retriever")}>Retriever</button>
            <button onClick={() => setDogBreed("Rottweiler")}>
                Rottweiler
            </button>
            <button onClick={() => setDogBreed("Chihuahua")}>Chihuahua</button>

            <div>
                <MainStage
                    onNext={onNext}
                    dogBreedToQuery={DogBreeds}
                ></MainStage>
            </div>
        </div>
    );
};

export default App;
