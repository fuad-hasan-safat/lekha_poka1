'use client'
import Controls from "./Control";
import Progressbar from "./Progressbar";
import SongInfo from "./song-info";

const AudioPlayer = () => {
    return (
        <>
            <div className="flex flex-row justify-center content-center space-x-16 mb-10">
                <div>
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