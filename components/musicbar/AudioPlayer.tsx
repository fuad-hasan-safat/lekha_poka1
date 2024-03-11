'use client'
import Controls from "./Control";
import Progressbar from "./Progressbar";
import SongInfo from "./song-info";

const AudioPlayer = () => {
    return (
        <>
            <div className="fixed flex flex-row backdrop-blur-md justify-center content-center space-x-16 bottom-[50px] bg-black/20  w-full h-[140px] ">
                <div className="items-center content-center justify-center z-[200]">
                    <SongInfo/>
                </div>

                <div className="flex flex-col items-center space-y-3">
                    <Controls />
                    <Progressbar />

                </div>

                <div>
                    <SongInfo/>
                </div>

            </div>

        </>



    );
};


export default AudioPlayer;