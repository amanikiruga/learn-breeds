import { useEffect, useState } from "react";
import { DogBreeds, fetchDogImg } from "./services/DogAPI";
type MainStageProps = {
    dogBreedToQuery: { [key: string]: string };
    onNext: (isAnswer: boolean) => void;
};

type DogImages = {
    imgLink: string;
    isAnswer: boolean;
    breed: string;
}; //[key: string]: string[] | string }

const MainStage = (props: MainStageProps) => {
    const [curScore, setCurScore] = useState(0);
    //get random images for each category, including answer
    const randomDogBreedGenerator = () => {
        return Math.floor(Math.random() * Object.keys(DogBreeds).length);
    };
    const [answerDogBreedIndex, setAnswerDogBreedIndex] = useState(
        randomDogBreedGenerator()
    );
    const [dogImages, setDogImages] = useState<DogImages[]>([
        { imgLink: "", isAnswer: false, breed: "dfsdf" },
    ]);
    const [isShowGame, setIsShowGame] = useState(false);

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
            answerDogBreedIndex
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
        setTimeout(() => {
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
                        setIsShowGame(true);
                        tempDogImages.push(curBreed);
                        setDogImages([...tempDogImages]);
                    })
                    .catch((err) => console.log(`API issues: ${err}`));
            }
        }, 1000);

        // console.log(tempDogImages);
        // return () => {
        // setIsShowGame(false);
        // };
    }, [answerDogBreedIndex, props.dogBreedToQuery]);

    const choiceCards = dogImages.map((el) => {
        return (
            <div
                key={el.imgLink}
                className="card"
                onClick={() => {
                    setAnswerDogBreedIndex(randomDogBreedGenerator());
                    setCurScore(curScore + 25);
                    // props.onNext(el.isAnswer);
                    console.log(el.isAnswer);
                }}
            >
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
    return isShowGame ? (
        <div>
            <div>
                {dogImages.map((el) => {
                    return el.breed;
                })}
            </div>
            <div className="header_bar">
                <div className="cur_score">
                    Your score is:
                    {` ${curScore}`}
                </div>
            </div>
            <div className="prompt">
                <h2> Which picture is a {promptBreed}</h2>
            </div>
            <div className="row">{choiceCards}</div>
        </div>
    ) : (
        <div>Loading ... </div>
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
