import { useState, useRef, useEffect } from 'react';
import { Controls, InitialPlayerState, PlayerState, Playlist } from '@/components/musicbar/audioplayer/type';
import { createAudioPlayer } from '@/components/musicbar/audioplayer/audioplayer'

interface AudioPlayer extends Controls {
  playerState: PlayerState;
}

function useAudioPlayer(playlist: Playlist): AudioPlayer {
  const [playerState, setPlayerState] =
    useState<PlayerState>(InitialPlayerState);
  const playerRef = useRef<Controls | null>(null);

  useEffect(() => {
    const newPlayer = createAudioPlayer(playlist, setPlayerState);
    playerRef.current = newPlayer;
    return () => {
      newPlayer.cleanup();
    };
  }, [playlist]);

  // function setPlaybackPosition(position: number) {
  //   playerRef.current?.setPlaybackPosition(position);
  // }

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

  function playPrevTrack() {
    playerRef.current?.playPrevTrack();
  }

  function cleanup() {
    playerRef.current?.cleanup();
  }

  return {
    // setPlaybackPosition,
    playerState,
    toggleShuffle,
    toggleRepeat,
    togglePlayPause,
    playNextTrack,
    playPrevTrack,
    cleanup,
  };
}

export default useAudioPlayer;