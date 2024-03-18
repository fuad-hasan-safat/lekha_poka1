import { ChangeEventHandler } from "react";


const Volumebar = () =>{
    function volume_change(): void{
        return undefined
    }

    return (
        <>
         <button
         >
         <input
                type="range"
                min='1'
                max='100'
                id="volume"
                step={0.25}
                width={100}
                className="sound appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-[4px] w-[100px] [&::-webkit-slider-runnable-track]:white "
                //        onChange={volume_change()}
            /> 

         </button>
        
        </>
    );


}

export default Volumebar;