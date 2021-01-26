import { SongType } from './Song';

export interface PlaylistType {
  currSong?: {
    idx: number;
    songUrl: string;
    imgUrl: string;
    title: string;
  };
  _id?: string;
  name: string;
  description: string;
  genre: string;
  img: string;
  songs: Array<SongType>;
}
