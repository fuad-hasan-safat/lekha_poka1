import { Slider } from "@material-tailwind/react";


type ProgressBarProps = {
    progress: number;
    onChange: (value: number) => void;
    leftLabel: string;
    rightLabel: string;
};

const Progressbar = ({
    progress,
    onChange,
    leftLabel,
    rightLabel,
}: ProgressBarProps) => {
    return (
        <div className="flex flex-row space-x-4 justify-center items-center ">
            <span className="text-xs text-black font-semibold">{leftLabel}</span>
            <input
                type="range"
                min='1'
                max='100'
                value={progress}
                step={0.25}
                className="slider appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 w-[400px] [&::-webkit-slider-runnable-track]:bg-white [&::-webkit-slider-runnable-track]:text-yellow-400 "
                height={2}
                onChange={(event) => {
                    onChange(parseInt(event?.target.value))
                }}
            />
            {/* <div className="w-[400px] h-[4px] bg-white">
                <Slider
                    key='progressbar'
                    min={1}
                    max={100}
                    color="yellow"
                    defaultValue={50}
                    step={0.25}
                    // className="text-[#2ec947]"
                    // barClassName="rounded-none bg-white"
                    // thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                    trackClassName="slider"
                    onChange={(event) => {
                        onChange(parseInt(event?.target.value));
                    }} placeholder={undefined}
                />
            </div> */}



            <span className="text-xs text-black font-semibold">{rightLabel}</span>

        </div>

    )
}

export default Progressbar;