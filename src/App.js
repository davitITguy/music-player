import React, { useState, useRef } from "react";
//import components
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
//import styles
import "./styles/app.scss";
//import util
import data from "./data";

const App = () => {
  //Ref
  const audioRef = useRef(null);
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  //state from player
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  //function from player
  const timeUpdateHandler = e => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // calc %
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(current);
    const animation = Math.round((roundedCurrent / roundedDuration) * 100);

    setSongInfo({ ...songInfo, currentTime: current, duration, animationPercentage: animation });
  };

  const songEndHandler = async () => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id);

    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default App;
