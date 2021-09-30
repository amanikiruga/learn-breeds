import { useEffect, useState } from "react";
import { DogBreeds, fetchDogImg } from "./services/DogAPI";
type MainStageProps = {
    dogBreed: string;
    dogBreedToQuery: { [key: string]: string };
};

const MainStage = (props: MainStageProps) => {
    const [dogImage, setDogImage] = useState("");
    console.log(props.dogBreed);
    console.log(props.dogBreedToQuery[props.dogBreed]);
    useEffect(() => {
        fetchDogImg(props.dogBreedToQuery[props.dogBreed])
            .then((response) => setDogImage(response.message))
            .catch((err) => {
                console.log(`We have an error in getting from API ${err}`);
            });
    }, [props.dogBreed]);

    return (
        <div>
            <img src={dogImage}></img>
        </div>
    );
};

export default MainStage;
