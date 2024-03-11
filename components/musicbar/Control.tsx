
'use client';

// import playButtonIcon from '../../public/images/icons/ic_play.svg';
// import nextButtonIcon from  '/images/icons/ic_next.svg';
// import prevButtonIcon from  '/images/icons/ic_prev.svg';
// import shuffleButtonIcon from  '/images/icons/ic_shuffle.svg';
// import repeatButtonIcon from  '/images/icons/ic_repeat.svg';
// import shuffleButtonDisabledIcon from  '/images/icons/ic_shuffle_disabled.svg';
// import pauseButtonIcon  from '/images/icons/ic_pause.svg';
// import repeatButtonDisabledIcon from  '/images/icons/ic_repeat.svg';

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

const Controls = () => {

    const playButtonIcon: string = '/images/icons/ic_play.svg';
    const nextButtonIcon: string  = '/images/icons/ic_next.svg';
    const prevButtonIcon: string  = '/images/icons/ic_prev.svg';
    const shuffleButtonIcon: string  = '/images/icons/ic_shuffle.svg';
    const repeatButtonIcon: string  = '/images/icons/ic_repeat.svg';
    const shuffleButtonDisabledIcon: string  = '/images/icons/ic_shuffle_disabled.svg';
    const pauseButtonIcon: string  = '/images/icons/ic_pause.svg';
    const repeatButtonDisabledIcon: string  = '/images/icons/ic_repeat.svg';
    function onClick() {

    }
    return (
        <div className="flex flex-row mt-4 space-x-6">
            <ImageButton src={shuffleButtonIcon} fnc={onClick} />
            <ImageButton src={prevButtonIcon} fnc={onClick} />
            <ImageButton src={pauseButtonIcon} fnc={onClick} />
            <ImageButton src={nextButtonIcon} fnc={onClick} />
            <ImageButton src={repeatButtonIcon} fnc={onClick} />
        </div>
    );
};

export default Controls;


