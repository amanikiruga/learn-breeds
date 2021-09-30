import { useState } from "react";
import MainStage from "./MainStage";
import { DogBreeds } from "./services/DogAPI";
export type DogType = {
    message: string;
    status: string;
};
const App = () => {
    const [dogBreed, setDogBreed] = useState("Chihuahua");

    return (
        <div>
            <button onClick={() => setDogBreed("Retriever")}>retriever</button>
            <button onClick={() => setDogBreed("Rottweiler")}>
                Rottweiler
            </button>
            <button onClick={() => setDogBreed("Chihuahua")}>Chihuahua</button>
            <MainStage
                dogBreed={dogBreed}
                dogBreedToQuery={DogBreeds}
            ></MainStage>
        </div>
    );
};

export default App;
