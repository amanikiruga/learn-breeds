type GameOverProps = {
    finalScore: number;
};

const GameOver = (props: GameOverProps) => {
    return (
        <div>
            <p> Game Over! </p>
            <p> Your Score Was {props.finalScore} </p>
        </div>
    );
};
export default GameOver;
