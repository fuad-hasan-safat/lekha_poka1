import Volumebar from "./volumebar";

type musicProp = {
    audioRef:HTMLAudioElement;
}

export default function MusicleftPart() {
    function mute_sound() {
        return undefined
    }

    return (

            <div className="flex flex-row  space-x-5 mt-[70px]">

                {/* fav icon */}
                <button className="">
                    <img
                        src="/images/icons/ic_fav.svg"
                    ></img>
                </button>

                {/* volume icon */}
                <button
                onClick={mute_sound()}
                >
                    <img
                        src="/images/icons/ic_volumeon.svg"
                         
                    ></img>
                </button>
                {/* volume bar */}
                <div>
                    <Volumebar/>
                </div>
                {/*   notes */}
                <button>
                    <img
                        src="/images/icons/ic_songlist.svg"
                    ></img>
                </button>
            </div>
    );
}