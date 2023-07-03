import { UserType } from "../App";
import { ScoreType } from "../services/ScoreRepo";

type HighScoresProps = {
  userList: UserType[];
  onGoBackToHome: () => void;
  highScoreLevel: "easy" | "hard";
  setHighScoreLevel: (level: "easy" | "hard") => void;
};

const HighScores = (props: HighScoresProps) => {
  return (
    <div className="high_scores_screen">
      <div id="high_scores_screen_heading"> High Scores</div>

      <div className="high_scores_list">
        <button
          className="button high_scores_screen_btn"
          onClick={props.onGoBackToHome}
        >
          Go Back to Home
        </button>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>
                Score:{" "}
                <div
                  className={`level-highscore easy ${
                    props.highScoreLevel === "easy"
                      ? "chosen-level-highscore"
                      : ""
                  }`}
                  onClick={() => props.setHighScoreLevel("easy")}
                >
                  Easy
                </div>
                <div
                  className={`level-highscore hard ${
                    props.highScoreLevel === "hard"
                      ? "chosen-level-highscore"
                      : ""
                  }`}
                  onClick={() => props.setHighScoreLevel("hard")}
                >
                  Hard
                </div>
              </th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {props.userList.map((el, idx) => {
              return (
                el.username.trim() && (
                  <tr key={el.uuid}>
                    <td>{idx + 1}.</td>
                    <td>{el.username}</td>
                    <td>{el[`highscore-${props.highScoreLevel}`]}</td>
                    <td>{new Date(el.lastUpdated).toLocaleDateString()}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HighScores;
