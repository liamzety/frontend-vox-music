import { PlayerType } from '../../types/Player';
import { PlaylistType } from '../../types/Playlist';
import { RootStore } from '../store';
import { action, computed, makeObservable, observable } from 'mobx';

export class PlayerStore {
  root: RootStore;
  player: PlayerType;

  constructor(root: RootStore) {
    this.root = root;
    this.player = {
      isOn: false,
      isPlaying: true,
      duration: null,
      time: 0,
      volume: 0.3,
      lastVolume: null,
      currPlaylist: {
        currSong: {
          idx: null,
          songUrl: '',
          imgUrl: '',
          title: '',
        },
        _id: null,
        name: '',
        description: '',
        genre: '',
        img: '',
        songs: [],
      },
    };

    // no work here only assignments
    makeObservable(this, {
      player: observable,
      currPlaylist: computed,
      setPlayer: action,
      handleNextPrevSong: action,
      setCurrPlaying: action,
      setCurrPlaylist: action,
    });
  }

  init() {
    // safe to access other stores
    console.log('init modal store');
  }
  get currPlaylist() {
    return this.player.currPlaylist;
  }
  setPlayer(updatedPlayer: any) {
    this.player = { ...this.player, ...updatedPlayer };
  }
  handleNextPrevSong(val: string) {
    if (this.currPlaylist.songs.length === 0) return;
    if (val === 'next') {
      const nextSongIdx =
        this.currPlaylist.currSong.idx + 1 > this.currPlaylist.songs.length - 1
          ? 0
          : this.currPlaylist.currSong.idx + 1;
      const nextSongData = this.currPlaylist.songs[nextSongIdx];
      const { url: imgUrl, title, video_id: songUrl } = nextSongData;

      this.setCurrPlaying({ imgUrl, songUrl, title, idx: nextSongIdx });
    } else {
      const prevSongIdx =
        this.currPlaylist.currSong.idx - 1 < 0
          ? this.currPlaylist.songs.length - 1
          : this.currPlaylist.currSong.idx - 1;
      const prevSongData = this.currPlaylist.songs[prevSongIdx];
      const { url: imgUrl, title, video_id: songUrl } = prevSongData;

      this.setCurrPlaying({ imgUrl, songUrl, title, idx: prevSongIdx });
    }

    this.player.isPlaying = true;
  }
  setCurrPlaying({ imgUrl, songUrl, title, idx }: any) {
    this.player = {
      ...this.player,
      isOn: true,
      currPlaylist: {
        ...this.player.currPlaylist,
        currSong: {
          imgUrl,
          title,
          songUrl,
          idx,
        },
      },
    };
  }
  setCurrPlaylist(data: PlaylistType) {
    this.player = {
      ...this.player,
      currPlaylist: { ...this.player.currPlaylist, ...data },
    };
  }
}
