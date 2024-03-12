'use client'
import { useRef, useState } from "react";
import Controls from "./Control";
import Progressbar from "./Progressbar";
import { createAudioPlayer } from "./audioplayer/audioplayer";
import playlist from "./platlists";
import SongInfo from "./song-info";
import { InitialPlayerState, PlayerState } from "./audioplayer/type";
import useAudioPlayer from "./audioplayer/hook";

const AudioPlayer = () => {
    const { cleanup, playNextTrack, playPrevTrack, togglePlayPause, toggleRepeat, toggleShuffle, playerState } = useAudioPlayer(playlist);
    const { repeat, shuffle, playBackState } = playerState;
    return (
        <>
            <div className="fixed flex flex-row backdrop-blur-lg justify-center content-center space-x-16 bottom-[50px] bg-black/30  w-full h-[140px] ">
                <div className="items-center content-center justify-center z-[200]">
                    <SongInfo />
                </div>

                <div className="flex flex-col items-center space-y-6 pt-2">
                    <Controls
                         onShuffleClick={toggleShuffle}
                        onRepeatClick={toggleRepeat}
                        onPrevClick={playPrevTrack}
                        onNextClick={playNextTrack}
                        onPlayClick={togglePlayPause}
                        isPlaying={playBackState === 'PLAYING'}
                        repeat={repeat}
                        shuffle={shuffle}
                    />
                    <Progressbar />

                </div>

                <div>
                    <SongInfo />
                </div>
            </div>
        </>
    );
};


export default AudioPlayer;