import { ScoreType } from "./services/ScoreRepo";

type PastScoresProps = {
    pastScoresList: ScoreType[];
    onGoBackToHome: () => void;
};

const PastScores = (props: PastScoresProps) => {
    return (
        <div>
            <div>
                <h1>Past Scores</h1>
            </div>
            <div>
                <ol>
                    {props.pastScoresList.map((el) => {
                        return <li key={el.date}>{el.score}</li>;
                    })}
                </ol>
            </div>
            <button onClick={props.onGoBackToHome}>Go Back to Home</button>
        </div>
    );
};

export default PastScores;
