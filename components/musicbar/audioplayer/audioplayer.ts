import { Controls, PlaybackState, PlayerState, Playlist } from "./type";

export function createAudioPlayer(
    playlist: Playlist,
    onStateChange : (state: PlayerState) => void,
    ): Controls{

    let currentTrackIndex = 0;
    let repeat = false;
    let shuffle = false;
    const audioElement: HTMLAudioElement = new Audio();



     /** ==========  Player State  =========== */
//region
        function emitCurrentPlayerState(){
            const state = computerCurrentPlayerState();
            onStateChange(state);
        }

        function computerCurrentPlayerState(): PlayerState{
            return {
                playBackState: getPlayBackStste(),
                repeat,
                shuffle,
            }
        }

        function getPlayBackStste():PlaybackState{
            return  (audioElement.paused ? 'PAUSED' : 'PLAYING');
        }
//endregion

/* =====  listen handler ====== */
// region
function setupAudioElementListeners(){
    audioElement.addEventListener('playing', emitCurrentPlayerState);
    audioElement.addEventListener('pause', emitCurrentPlayerState);
    audioElement.addEventListener('ended', onCurrentTrackEnded);
}

function removeAudioElementListeners(){
    audioElement.removeEventListener('playing', emitCurrentPlayerState);
    audioElement.removeEventListener('pause', emitCurrentPlayerState);
    audioElement.addEventListener('ended', onCurrentTrackEnded);
}

function onCurrentTrackEnded(){
    if(repeat){
        replayCurrentTrack();
    }else{
        playNextTrack();
    }
}

// endregion

    /** ==========  Track Handling  =========== */
    // #region
    function replayCurrentTrack(){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    function loadTrak(index: number){
        audioElement.src = playlist[index].audioSrc;
        audioElement.load();
        currentTrackIndex = index;
    }

    function computeNextTrackIndex(): number{
        return shuffle? computeRandomTrackIndex() : computeSubSequentTrackIndex();
    }

    function computeSubSequentTrackIndex(): number{
        return (currentTrackIndex + 1) % playlist.length;
    }
    function computeRandomTrackIndex(): number{
        if(playlist.length === 1) return 0;
        const index = Math.floor(Math.random()*(playlist.length - 1));

        return index < currentTrackIndex? index: index+1 ;
    }
  // #endregion

  /** ==========  Initialize  =========== */
    // #region
    function init(){
        setupAudioElementListeners();
        loadTrak(0);
    }

    function cleanup(){
        removeAudioElementListeners();
        audioElement.pause();
    }
     // #endregion


    /* ======  control   ======= */
      // #region
      function toggleShuffle(){
        shuffle = !shuffle;
        emitCurrentPlayerState();
      }
    function toggleRepeat(){
        repeat = !repeat;
        emitCurrentPlayerState();
    }
    function playNextTrack(){
        const nextTrackIndex = computeNextTrackIndex();
        loadTrak(nextTrackIndex)
        audioElement.play();
    }

    function playPrevTrack(){
        const prevTrackIndex = currentTrackIndex - 1;
        loadTrak(prevTrackIndex)
        audioElement.play();
    }

    function togglePlayPause(){
        if(audioElement.paused){
            audioElement.play();
        }else{
            audioElement.pause();
        }
    }
     // #endregion

    init();

    return {
        toggleShuffle,
        toggleRepeat,
        playNextTrack,
        playPrevTrack,
        togglePlayPause,
        cleanup,
    };
}