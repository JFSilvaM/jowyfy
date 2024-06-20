import { Icon, Progress } from "semantic-ui-react";
import "./Player.scss";

export const Player = () => {
  return (
    <div className="player">
      <Icon name={false ? "pause circle outline" : "play circle outline"} />

      <Progress progress="value" value={30} total={100} size="tiny" />
    </div>
  );
};
