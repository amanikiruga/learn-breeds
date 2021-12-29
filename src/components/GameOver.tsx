type GameOverProps = {
    finalScore: number;
    onRestartGame: () => void;
    onGoBackToHome: () => void;
    isTimeUp: boolean;
};

const GameOver = (props: GameOverProps) => {
    return (
        <div className="gameover_screen">
            <div id="gameover_heading">
                {" "}
                {props.isTimeUp ? "Time's Up!" : "Game Over!"}{" "}
            </div>
            <div id="gameover_score_description">Your Score Was:</div>
            <div id="gameover_score_number"> {props.finalScore} </div>
            <button className="button" onClick={props.onRestartGame}>
                Try Again
            </button>
            <button className="button" onClick={props.onGoBackToHome}>
                Go Back to Home
            </button>
        </div>
    );
};
export default GameOver;
