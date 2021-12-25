import { clear } from "console";
import { useEffect, useRef, useState } from "react";
import GameOver from "./GameOver";
import { easyBreeds, hardBreeds, fetchDogImg } from "./../services/DogAPI";

type MainStageProps = {
    initialRoundTimeInSeconds: number;
    onGameOver: (curScore: number) => void;
    onGoBackToHome: () => void;
    currentLevel: string;
};

type DogImages = {
    imgLink: string;
    isAnswer: boolean;
    breed: string;
}; //[key: string]: string[] | string }

const MainStage = (props: MainStageProps) => {
    const { onGameOver } = props;
    const [curScore, setCurScore] = useState(0);
    const [curTimeSeconds, setCurTimeSeconds] = useState(
        props.initialRoundTimeInSeconds
    );

    const curTimer = useRef<NodeJS.Timeout | null>(null);
    const [proportionOfEasyBreeds, setProportionOfEasyBreeds] = useState(1);

    const [isRoundOn, setIsRoundOn] = useState(false);
    const handleGoBackToHome = () => {
        setIsRoundOn(false);
        onGameOver(0);
        props.onGoBackToHome();
    };

    //get random images for each category, including answer

    const randomDogBreedGenerator = () => {
        // if easy level

        let isEasyChosen = false;
        let answerBreed;
        let otherChoicesBreeds = [];
        const totalWeightedBreeds =
            Object.keys(easyBreeds).length *
                (props.currentLevel === "easy" ? proportionOfEasyBreeds : 0.2) +
            Object.keys(hardBreeds).length *
                (props.currentLevel === "easy"
                    ? 1 - proportionOfEasyBreeds
                    : 0.8);

        const randomWeightedSelector = Math.random() * totalWeightedBreeds;
        if (
            randomWeightedSelector <
            Object.keys(easyBreeds).length * proportionOfEasyBreeds
        )
            return easyBreeds;
        else return hardBreeds;
    };
    const [dogBreedsToQuery, setDogBreedsToQuery] = useState(
        randomDogBreedGenerator()
    );
    const [dogImages, setDogImages] = useState<DogImages[]>([
        { imgLink: "", isAnswer: false, breed: "dfsdf" },
    ]);
    const [isShowGame, setIsShowGame] = useState(false);

    useEffect(() => {
        let temp = Object.keys(dogBreedsToQuery).slice();
        let breedsToShow: string[] = [];
        for (let i = 0; i < 3; i++) {
            let curRandomIndex = Math.floor(Math.random() * temp.length);
            let curBreed: keyof typeof dogBreedsToQuery = temp[
                curRandomIndex
            ] as keyof typeof dogBreedsToQuery;
            temp = temp.filter((breed) => breed !== curBreed);
            breedsToShow.push(curBreed);
        }

        const answerBreed = breedsToShow[Math.floor(Math.random() * 127) % 3];

        const tempDogImages: DogImages[] = [];
        if (curScore > 0 && curScore % 85 == 0)
            setProportionOfEasyBreeds(
                Math.max(0, proportionOfEasyBreeds - 0.2)
            );
        //fetch dog images asynchronously
        setTimeout(() => {
            for (const breed of breedsToShow) {
                fetchDogImg(
                    dogBreedsToQuery[breed as keyof typeof dogBreedsToQuery]
                )
                    .then((response) => {
                        console.log(response.message);
                        let curBreed = {
                            imgLink: response.message,
                            breed: breed,
                            isAnswer: breed === answerBreed,
                        };

                        setIsShowGame(true);
                        setIsRoundOn(true);

                        tempDogImages.push(curBreed);
                        setDogImages([...tempDogImages]);
                    })
                    .catch((err) => console.log(`API issues: ${err}`));
            }
        }, 1000);
    }, [curScore, dogBreedsToQuery, proportionOfEasyBreeds]);

    useEffect(() => {
        if (!isRoundOn) {
            return;
        }
        //create timer

        const roundTimer = setTimeout(() => {
            setCurTimeSeconds(curTimeSeconds - 1);
            if (curTimeSeconds <= 0) {
                setIsRoundOn(false);
                setCurTimeSeconds(props.initialRoundTimeInSeconds);
                clearTimeout(roundTimer);
                onGameOver(curScore);
            }
        }, 1000);
        curTimer.current = roundTimer;
        // return clearTimeout(roundTimer);
        // return clearTimeout(roundTimer);
    }, [
        onGameOver,
        curScore,
        props.initialRoundTimeInSeconds,
        curTimeSeconds,
        isRoundOn,
    ]);

    const choiceCards = dogImages.map((el) => {
        return (
            <div
                key={el.imgLink}
                className="card"
                onClick={() => {
                    setDogBreedsToQuery(randomDogBreedGenerator());

                    setIsRoundOn(false);
                    // setCurTimeSeconds(props.initialRoundTimeInSeconds);
                    setCurTimeSeconds(curTimeSeconds + 2);

                    if (curTimer.current) clearTimeout(curTimer.current);
                    if (el.isAnswer) setCurScore(curScore + 25);
                    else props.onGameOver(curScore);
                    // props.onNext(el.isAnswer);
                    console.log(el.isAnswer);
                }}
            >
                <div
                    className={`wrapper ${
                        el.isAnswer && !isRoundOn
                            ? "answer"
                            : !el.isAnswer && !isRoundOn
                            ? "other"
                            : ""
                    }`}
                >
                    <div
                        className="card_img"
                        style={{
                            backgroundImage: `url(${el.imgLink})`,
                            backgroundSize: "auto 100%",
                        }}
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

    //debug with dog breeds:
    /*
    <div>
                {dogImages.map((el) => {
                    return el.breed;
                })}
            </div>
    */
    return isShowGame ? (
        <div>
            <div className="header_bar">
                <div
                    className="header_item"
                    id="header_bar_home_btn"
                    onClick={handleGoBackToHome}
                >
                    Back to Home
                </div>
                <div className="header_item" id="header_bar_timer">
                    {`Time: ${curTimeSeconds}`}
                </div>
                <div className="header_item" id="header_bar_score">
                    Score:
                    <strong> {` ${curScore}`} </strong>
                </div>
            </div>
            <div className="main_screen">
                <div className="prompt">
                    <h2> Which picture is a {promptBreed}</h2>
                </div>
                <div className="card_choices">{choiceCards}</div>
            </div>
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
