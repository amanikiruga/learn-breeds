export type ScoreType = {
    score: number;
    date: string;
};

export const getAllScores = (): ScoreType[] => {
    const savedScores = localStorage.getItem("game_scores");
    const parsedScores = savedScores ? JSON.parse(savedScores) : [];
    return parsedScores.sort((a: ScoreType, b: ScoreType) => {
        return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });
};

export const saveScoreDatabase = (score: ScoreType) => {
    const savedScoresList = getAllScores();
    savedScoresList.push(score);
    localStorage.setItem("game_scores", JSON.stringify(savedScoresList));
};

export const deleteAllScores = () => {
    localStorage.clear();
};
