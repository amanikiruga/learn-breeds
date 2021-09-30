import { useState } from "react";
import MainStage from "./MainStage";
import { DogBreeds } from "./services/DogAPI";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogBreed, setDogBreed] = useState("");
    const randomDogBreedIndex = Math.floor(
        Math.random() * Object.keys(DogBreeds).length
    );
    return (
        <div>
            <button onClick={() => setDogBreed("Retriever")}>Retriever</button>
            <button onClick={() => setDogBreed("Rottweiler")}>
                Rottweiler
            </button>
            <button onClick={() => setDogBreed("Chihuahua")}>Chihuahua</button>

            <div>
                <MainStage
                    answerDogBreedIndex={randomDogBreedIndex}
                    dogBreedToQuery={DogBreeds}
                ></MainStage>
            </div>
        </div>
    );
};

export default App;
