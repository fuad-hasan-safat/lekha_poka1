// playlist and truck

export type Playlist = Array<Track>;

export type Track = {
    audioSrc: string;
    metadata: TrackMetadata;
}

/* === Controls === */
export type Controls = {
    toggleShuffle:() => void;
    toggleRepeat:() => void;
    togglePlayPause:() => void;
    playNextTrack:()=> void;
    playPrevTrack:()=> void;
    cleanup:() => void;
}

export type TrackMetadata = {
    writer: string;
    title: string;
    image:string;
}


/* ====== Player State ====== */
export type PlayerState = {
    playBackState: PlaybackState;
    repeat: boolean;
    shuffle: boolean;
}

export type PlaybackState = 'PLAYING' | 'PAUSED';

export const InitialPlayerState: PlayerState = {
    playBackState: 'PAUSED',
    repeat: false,
    shuffle: false,
}