"use client";
import { useRef, useState } from "react";
import Controls from "./Control";
import Progressbar from "./Progressbar";
import playlist from "./platlists";
import SongInfo from "./song-info";
import useAudioPlayer from "./audioplayer/hook";
import MusicleftPart from "./leftPart/MusicLeftPart";

const AudioPlayer = () => {
  const {
    playNextTrack,
    playPreviousTrack,
    playerState,
    togglePlayPause,
    toggleRepeat,
    toggleShuffle,
    setPlaybackPosition,
    muteSound,
    handleVolumeChange,
  } = useAudioPlayer(playlist);

  const {
    repeat,
    playbackState,
    shuffle,
    currentTrackDuration,
    currentTrackPlaybackPosition,
    currentTrackMetadata,
  } = playerState;

  function setProgress(value: number) {
    if (currentTrackDuration !== null) {
      setPlaybackPosition((value / 100) * currentTrackDuration);
    }
  }
  function computeProgress(): number {
    const noProgress =
      currentTrackDuration === null ||
      currentTrackPlaybackPosition === null ||
      currentTrackDuration === 0;

    if (noProgress) return 0;
    else {
      return (currentTrackPlaybackPosition / currentTrackDuration) * 100;
    }
  }

  return (
    <>
      <div className="fixed flex flex-row backdrop-blur-lg justify-center content-center space-x-16 bottom-[40px] bg-yellow-500/30  w-full h-[140px] ">
        <div className="items-center content-center justify-center z-[200]">
          <SongInfo
            title={currentTrackMetadata?.title}
            writer={currentTrackMetadata?.writer}
            image={currentTrackMetadata?.image}
          />
        </div>

        <div className="flex flex-col items-center space-y-6 pt-2">
          <Controls
            onShuffleClick={toggleShuffle}
            onRepeatClick={toggleRepeat}
            onPrevClick={playPreviousTrack}
            onNextClick={playNextTrack}
            onPlayClick={togglePlayPause}
            isPlaying={playbackState === "PLAYING"}
            repeat={repeat}
            shuffle={shuffle}
          />
          <Progressbar
            rightLabel={formatTime(currentTrackDuration)}
            leftLabel={formatTime(currentTrackPlaybackPosition)}
            onChange={setProgress}
            progress={computeProgress()}
          />
        </div>

        <div>
          <MusicleftPart
            muteSound={muteSound}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </>
  );
};

export default AudioPlayer;

function formatTime(timeInSeconds: number | null): string {
  if (timeInSeconds === null) return "";
  const numberOfMinutes = Math.floor(timeInSeconds / 60);
  const numberOfSeconds = Math.floor(timeInSeconds - numberOfMinutes * 60);
  const minutes = `${numberOfMinutes}`.padStart(2, "0");
  const seconds = `${numberOfSeconds}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}
