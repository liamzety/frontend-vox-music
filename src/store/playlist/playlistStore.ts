import { PlaylistType } from '../../types/Playlist';
import { RootStore } from '../store';
import { action, makeObservable, observable } from 'mobx';

export class PlaylistStore {
  root: RootStore;
  playlists: PlaylistType[];

  constructor(root: RootStore) {
    this.root = root;
    this.playlists = [];
    // no work here only assignments
    makeObservable(this, {
      playlists: observable,
      setPlaylists: action,
      addPlaylist: action,
      removePlaylist: action,
      updatePlaylist: action,
    });
  }
  init() {
    // safe to access other stores
    console.log('init playlist store');
  }

  setPlaylists(playlists: PlaylistType[]) {
    this.playlists = playlists;
  }

  addPlaylist(playlist: PlaylistType) {
    this.playlists.push(playlist);
  }
  removePlaylist(playlistId: string) {
    this.playlists = this.playlists.filter(
      (playlist: PlaylistType) => playlist._id !== playlistId
    );
  }
  updatePlaylist(playlist: PlaylistType) {
    const playlistIdx = this.playlists.findIndex(
      (_playlist: PlaylistType) => _playlist._id === playlist._id
    );

    this.playlists[playlistIdx] = playlist;
    this.root.playerStore.setCurrPlaylist(playlist);
  }
}
