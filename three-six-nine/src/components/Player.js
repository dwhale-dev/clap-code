import "../App.css";
import { find369 } from "./utils";

export default function Player(props) {
  return (
    <div className="player">
      <p className="player-name"></p>
      <p className="game-count">{find369()}</p>
    </div>
  );
}
