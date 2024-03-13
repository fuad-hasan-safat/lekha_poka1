import Volumebar from "./volumebar";

export default function MusicleftPart() {
    return (
        <>
            <div className="flex flex-row  space-x-5 mt-[70px]">

                {/* fav icon */}
                <div className="">
                    <img
                        src="/images/icons/ic_fav.svg"
                    />
                </div>

                {/* volume icon */}
                <div>
                    <img
                        src="/images/icons/ic_volumeon.svg"
                    />
                </div>
                {/* volume bar */}
                <div>
                    <Volumebar/>
                </div>
                {/*   notes */}
                <div>
                    <img
                        src="/images/icons/ic_songlist.svg"
                    />
                </div>
            </div>



        </>
    );
}