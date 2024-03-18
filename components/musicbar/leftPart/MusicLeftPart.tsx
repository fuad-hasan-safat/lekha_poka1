import Volumebar from "./volumebar";

export default function MusicleftPart() {
    function mute_sound() {
        return undefined
    }

    return (
        <>
            <div className="flex flex-row  space-x-5 mt-[70px]">

                {/* fav icon */}
                <button className="">
                    <img
                        src="/images/icons/ic_fav.svg"
                    />
                </button>

                {/* volume icon */}
                <button
                onClick={mute_sound()}
                >
                    <img
                        src="/images/icons/ic_volumeon.svg"
                         
                    />
                </button>
                {/* volume bar */}
                <div>
                    <Volumebar/>
                </div>
                {/*   notes */}
                <button>
                    <img
                        src="/images/icons/ic_songlist.svg"
                    />
                </button>
            </div>



        </>
    );
}