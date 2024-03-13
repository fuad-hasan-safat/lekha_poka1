
'use client';

import ImageButton from './Imagebutton';

type ControlsProps = {
    onPlayClick: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    onRepeatClick: () => void;
    onShuffleClick: () => void;
    isPlaying: boolean;
    repeat: boolean;
    shuffle: boolean;
};

const Controls = ({onPlayClick, onPrevClick, onNextClick, onRepeatClick, onShuffleClick ,isPlaying, repeat, shuffle}: ControlsProps) => {

    const playButtonIcon: string = '/images/icons/ic_play.svg';
    const nextButtonIcon: string  = '/images/icons/ic_next.svg';
    const prevButtonIcon: string  = '/images/icons/ic_prev.svg';
    const shuffleButtonIcon: string  = '/images/icons/ic_shuffle.svg';
    const repeatButtonIcon: string  = '/images/icons/ic_repeat.svg';
    const shuffleButtonDisabledIcon: string  = '/images/icons/ic_shuffle_disabled.svg';
    const pauseButtonIcon: string  = '/images/icons/ic_pause.svg';
    const repeatButtonDisabledIcon: string  = '/images/icons/ic_repeat_disabled.svg';

  

    return (
        <div className="flex flex-row mt-4 space-x-6">
            <ImageButton src={shuffle?shuffleButtonIcon:shuffleButtonDisabledIcon} onClick={onShuffleClick} />
            <ImageButton src={prevButtonIcon}  onClick={onPrevClick}  />
            <ImageButton src={isPlaying?pauseButtonIcon: playButtonIcon} className='h-[50px] w-[50px]' onClick={onPlayClick} />
            <ImageButton src={nextButtonIcon}  onClick={onNextClick} />
            <ImageButton src={repeat?repeatButtonIcon:repeatButtonDisabledIcon} onClick={onRepeatClick} />
        </div>
    );
};

export default Controls;

