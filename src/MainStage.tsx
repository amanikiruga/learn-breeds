import { useEffect, useState } from "react";
import { DogBreeds, fetchDogImg } from "./services/DogAPI";
type MainStageProps = {
    randomDogBreedIndex: number;
    dogBreedToQuery: { [key: string]: string };
};

const MainStage = (props: MainStageProps) => {
    const [dogImage, setDogImage] = useState("");

    const dogBreed =
        props.dogBreedToQuery[
            Object.keys(DogBreeds)[props.randomDogBreedIndex]
        ];

    console.log(dogBreed);
    useEffect(() => {
        fetchDogImg(dogBreed)
            .then((response) => setDogImage(response.message))
            .catch((err) => {
                console.log(`We have an error in getting from API ${err}`);
            });
    }, [props.randomDogBreedIndex]);

    return (
        <div>
            <div className="prompt">
                <h2> Which picture is a {dogBreed}</h2>
            </div>
            <div className="row">
                <div className="card">
                    <div className="wrapper">
                        <div
                            className="card_img"
                            style={{ backgroundImage: `url(${dogImage})` }}
                        ></div>
                    </div>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <div
                            className="card_img"
                            style={{ backgroundImage: `url(${dogImage})` }}
                        ></div>
                    </div>
                </div>
                <div className="card">
                    <div className="wrapper">
                        <div
                            className="card_img"
                            style={{ backgroundImage: `url(${dogImage})` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainStage;
