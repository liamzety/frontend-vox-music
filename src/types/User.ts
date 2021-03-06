import { PlaylistType } from './Playlist';

export interface UserType {
  _id: string;
  email: string;
  password: string;
  name: string;
  profile_img: string;
  isSignedIn: boolean;
  favouritePlaylists: PlaylistType[];
}
