import { useState, useRef, useEffect } from "react";
import {
  Controls,
  InitialPlayerState,
  PlayerState,
  Playlist,
} from "@/components/musicbar/audioplayer/type";
import { createAudioplayer } from "@/components/musicbar/audioplayer/audioplayer";
interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

function useAudioPlayer(playlist: Playlist): AudioPlayer {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);
  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    const newPlayer = createAudioplayer(playlist, setPlayerState);
    playerRef.current = newPlayer;
    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  function setPlaybackPosition(position: number) {
    playerRef.current?.setPlaybackPosition(position);
  }

  function toggleShuffle() {
    playerRef.current?.toggleShuffle();
  }

  function toggleRepeat() {
    playerRef.current?.toggleRepeat();
  }

  function togglePlayPause() {
    playerRef.current?.togglePlayPause();
  }

  function playNextTrack() {
    playerRef.current?.playNextTrack();
  }

  function playPreviousTrack() {
    playerRef.current?.playPreviousTrack();
  }

  function cleanup() {
    playerRef.current?.cleanup();
  }

  function muteSound() {
    playerRef.current?.muteSound();
  }

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    playerRef.current?.handleVolumeChange(event);
  }

  return {
    setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPreviousTrack,
    cleanup,
    muteSound,
    handleVolumeChange,
  };
}

export default useAudioPlayer;
