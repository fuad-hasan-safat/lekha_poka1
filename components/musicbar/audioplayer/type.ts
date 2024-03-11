// playlist and truck

export type Playlist = Array<Track>;

export type Track = {
    audioSrc: string;
    metadata: TrackMetadata;
}

export type TrackMetadata = {
    writer: string;
    title: string;
    image:string;
}