import { createContext, useState } from "react";

export const PlayerContext = createContext({});

export const PlayerProvider = (props) => {
  const { children } = props;

  const [song, setSong] = useState(null);
  const [miniature, setMiniature] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const playSong = (songData, miniatureData) => {
    setSong(songData);
    setMiniature(miniatureData);
    setPlaying(true);
  };

  const pause = () => setPlaying(false);

  const resume = () => setPlaying(true);

  const data = {
    song,
    miniature,
    playing,
    volume,
    playSong,
    pause,
    resume,
    setVolume,
  };

  return (
    <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
  );
};
