import { useEffect, useState } from "react";
import { DogBreeds, fetchDogImg } from "./services/DogAPI";
type MainStageProps = {
    answerDogBreedIndex: number;
    dogBreedToQuery: { [key: string]: string };
};

type DogImages = {
    imgLink: string;
    isAnswer: boolean;
    breed: string;
}; //[key: string]: string[] | string }

const MainStage = (props: MainStageProps) => {
    //get random images for each category, including answer
    const [dogImages, setDogImages] = useState<DogImages[]>([
        { imgLink: "", isAnswer: false, breed: "dfsdf" },
    ]);

    const shuffleArray = <T extends unknown>(arrayToShuffle: T[]) => {
        const copyArrayToShuffle = arrayToShuffle.slice();
        for (let i = 0; i < copyArrayToShuffle.length; i++) {
            const randIndex = Math.floor(
                Math.random() * copyArrayToShuffle.length
            );

            [copyArrayToShuffle[i], copyArrayToShuffle[randIndex]] = [
                copyArrayToShuffle[randIndex],
                copyArrayToShuffle[i],
            ];
        }
        return copyArrayToShuffle;
    };

    useEffect(() => {
        const answerDogBreed = Object.keys(props.dogBreedToQuery)[
            props.answerDogBreedIndex
        ];
        //getting string breeds of correct length of choices that are not the answer
        let otherChoicesDogBreeds: string[] = [];
        const lengthChoicesNotAnswer = 2;
        for (let i = 0; i < lengthChoicesNotAnswer; i++) {
            const curRandIndex = Math.floor(
                Math.random() * lengthChoicesNotAnswer
            );
            const curBreed = Object.keys(props.dogBreedToQuery).filter(
                (val) => val !== answerDogBreed
            )[curRandIndex];
            otherChoicesDogBreeds.push(curBreed);
        }

        const tempDogImages: DogImages[] = [];
        for (const breed of otherChoicesDogBreeds.concat(answerDogBreed)) {
            // console.log(props.dogBreedToQuery[breed]);
            fetchDogImg(props.dogBreedToQuery[breed])
                .then((response) => {
                    console.log(response.message);
                    let curBreed = {
                        imgLink: response.message,
                        breed: breed,
                        isAnswer: breed === answerDogBreed,
                    };
                    tempDogImages.push(curBreed);
                    setDogImages([...tempDogImages]);
                })
                .catch((err) => console.log(`API issues: ${err}`));
        }
        // console.log(tempDogImages);

        console.log(dogImages);
    }, [props.answerDogBreedIndex, props.dogBreedToQuery]);

    const choiceCards = dogImages.map((el) => {
        return (
            <div key={el.imgLink} className="card">
                <div className="wrapper">
                    <div
                        className="card_img"
                        style={{ backgroundImage: `url(${el.imgLink})` }}
                    ></div>
                </div>
            </div>
        );
    });

    const promptBreed = dogImages.find((el) => el.isAnswer)?.breed || "";
    /*
    return (
        <div>
            {dogImages.map((el) => {
                return el.breed;
            })}
        </div>
    );
    */
    //choosing answer category
    return (
        <div>
            <div className="prompt">
                <h2> Which picture is a {promptBreed}</h2>
            </div>
            <div className="row">{choiceCards}</div>
        </div>
    );
    /*
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
    */
};

export default MainStage;
