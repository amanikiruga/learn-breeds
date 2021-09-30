import { useEffect, useState } from "react";
import { fetchDogImg } from "./services/DogAPI";
type MainStageProps = {
    imageLink: string;
};

const MainStage = () => {
    const [dogImage, setDogImage] = useState("");
    useEffect(() => {
        fetchDogImg().then((response) => setDogImage(response.message));
    }, []);

    return (
        <div>
            <img src={dogImage}></img>
        </div>
    );
};

export default MainStage;
