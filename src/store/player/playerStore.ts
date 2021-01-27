import { PlayerType } from '../../types/Player';
import { PlaylistType } from '../../types/Playlist';

export const createPlayerStore = {
  player: {
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
  } as PlayerType,
  setPlayer: function (updatedPlayer: PlayerType) {
    this.player = { ...this.player, ...updatedPlayer };
  },
  handleNextPrevSong: function (val: string) {
    if (val === 'next') {
      const nextSongIdx =
        this.player.currPlaylist.currSong.idx + 1 >
        this.player.currPlaylist.songs.length - 1
          ? 0
          : this.player.currPlaylist.currSong.idx + 1;
      const nextSongData = this.player.currPlaylist.songs[nextSongIdx];
      const { url: imgUrl, title, video_id: songUrl } = nextSongData;

      this.setCurrPlaying({ imgUrl, songUrl, title, idx: nextSongIdx });
    } else {
      const prevSongIdx =
        this.player.currPlaylist.currSong.idx - 1 < 0
          ? this.player.currPlaylist.songs.length - 1
          : this.player.currPlaylist.currSong.idx - 1;
      const prevSongData = this.player.currPlaylist.songs[prevSongIdx];
      const { url: imgUrl, title, video_id: songUrl } = prevSongData;

      this.setCurrPlaying({ imgUrl, songUrl, title, idx: prevSongIdx });
    }

    this.player.isPlaying = true;
  },
  setCurrPlaying: function ({ imgUrl, songUrl, title, idx }: any) {
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
  },
  setCurrPlaylist: function (data: PlaylistType) {
    this.player = {
      ...this.player,
      currPlaylist: { ...this.player.currPlaylist, ...data },
    };
  },
};
