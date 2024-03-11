
import {Playlist} from '@/components/musicbar/audioplayer/type'

const playlist: Playlist = [
  {
    audioSrc: '/audio/track1.mp3',
    metadata: {
      title: 'বাগিচায় বুলবুলি তুই',
      writer: 'কাজী নজরুল ইসলাম',
      image: '/images/writerimage/nazrul.jpg',
    },
  },
  {
    audioSrc: '/audio/track2.mp3',
    metadata: {
      title: 'দাঁড়ালে দুয়ারে মোর',
       writer: 'কাজী নজরুল ইসলাম',
      image: '/images/writerimage/nazrul.jpg',
    },
  },
  {
    audioSrc: '/audio/track3.mp3',
    metadata: {
      title: 'আমার হিয়ার মাঝে লুকিয়ে',
      writer: 'রবীন্দ্রনাথ ঠাকুর',
      image:  '/images/writerimage/robi.jpg',
    },
  },

];

export default playlist;