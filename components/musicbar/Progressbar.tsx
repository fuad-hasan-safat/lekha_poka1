const Progressbar = () => {
    return (
        <div className="flex flex-row space-x-3">
            <span className="text-xs ">01:00</span>
            <input
                type="range"
                min={1}
                max={100}
                value={50}
                step={0.25}
                className="slider"
            />


            <span className="text-xs">02:00</span>

        </div>

    )
}

export default Progressbar;