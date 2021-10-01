type GameOverProps = {
    finalScore: number;
    onRestartGame: () => void;
    onGoBackToHome: () => void;
};

const GameOver = (props: GameOverProps) => {
    return (
        <div>
            <p> Game Over! </p>
            <p> Your Score Was {props.finalScore} </p>
            <button onClick={props.onRestartGame}>Start Game</button>
            <button onClick={props.onGoBackToHome}>Go Back to Home</button>
        </div>
    );
};
export default GameOver;
