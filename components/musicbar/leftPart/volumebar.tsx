

const Volumebar = () =>{
    return (
        <>
         <div>
         <input
                type="range"
                min='1'
                max='100'
                step={0.25}
                width={100}
                className="sound appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-[4px] w-[100px] [&::-webkit-slider-runnable-track]:white "
                
            /> 

         </div>
        
        </>
    );


}

export default Volumebar;