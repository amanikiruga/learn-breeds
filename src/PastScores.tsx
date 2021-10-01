import { ScoreType } from "./services/ScoreRepo";

type PastScoresProps = {
    pastScoresList: ScoreType[];
    onGoBackToHome: () => void;
    onClearScores: () => void;
};

const PastScores = (props: PastScoresProps) => {
    return (
        <div className="past_scores_screen">
            <div id="past_scores_screen_heading"> Past Scores</div>
            <div>
                <ol>
                    {props.pastScoresList.map((el) => {
                        return <li key={el.date}>{el.score}</li>;
                    })}
                </ol>
            </div>
            <button
                className="button past_scores_screen_btn"
                onClick={props.onGoBackToHome}
            >
                Go Back to Home
            </button>
            <button
                className="button past_scores_screen_btn"
                id="past_scores_screen_clear_btn"
                onClick={props.onClearScores}
            >
                Clear Scores
            </button>
        </div>
    );
};

export default PastScores;
