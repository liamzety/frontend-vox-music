import { PlaylistType } from './Playlist';

export interface PlayerType {
  isOn: boolean;
  isPlaying: boolean;
  duration: number;
  time: number;
  volume: number;
  lastVolume: number;
  currPlaylist: PlaylistType;
}
