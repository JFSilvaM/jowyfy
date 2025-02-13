import { Icon, Image, Input } from "semantic-ui-react";
import { usePlayer } from "../../../hooks";
import { Player } from "../../Shared";
import "./Footer.scss";

export const Footer = () => {
  const { song, miniature, volume, setVolume } = usePlayer();

  return (
    <div className="footer">
      <div className="footer__left">
        {miniature && <Image src={miniature} />}

        {song && <p>{song.name}</p>}
      </div>

      <div className="footer__center">
        <Player />
      </div>

      <div className="footer__right">
        <Input
          label={<Icon name="volume up" />}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(_, data) => setVolume(Number(data.value))}
        />
      </div>
    </div>
  );
};
