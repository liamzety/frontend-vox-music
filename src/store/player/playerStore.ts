import { PlayerType } from "../../types/Player"
import { PlaylistType } from "../../types/Playlist";

export const createPlayerStore = {
        player: {
            isOn:false,
            isPlaying: true,
            duration: null,
            time: 0,
            volume: 0.3,
            lastVolume: null,
            idx:null,
            songUrl:'',
            currPlaylist: {
                _id:null,
                name:'',
                description:'',
                genre:'',
                img:'',
                songs:[]
            }
        } as PlayerType ,
        setPlayer: function(updatedPlayer:PlayerType)  {
            this.player = {...this.player,...updatedPlayer}
        },
        handleNextPrevSong: function(val:string,idx:number) {
            const nextSongIdx = idx + 1 > this.player.currPlaylist.songs.length - 1 ? 0 : this.player.idx + 1;
            const nextSongUrl = this.player.currPlaylist.songs[nextSongIdx].video_id;
        
            const prevSongIdx = idx - 1 < 0 ? this.player.currPlaylist.songs.length - 1 : this.player.idx - 1;
            const prevSongUrl = this.player.currPlaylist.songs[prevSongIdx].video_id;
        
            if (val === 'next') {
              this.setCurrPlaying({ songUrl: nextSongUrl, idx: nextSongIdx });
            } else {
              this.setCurrPlaying({ songUrl: prevSongUrl, idx: prevSongIdx });
            }
            
        },
        setCurrPlaying: function(data:{ songUrl: string; idx: number }) {
           this.player = {...this.player,isOn:true,...data}
        },
        setCurrPlaylist: function(data:PlaylistType) {
            this.player = {...this.player, currPlaylist:{...data}  }
        },
   
}

