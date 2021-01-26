import {PlaylistType} from './Playlist'

export interface PlayerType {
            isOn:boolean,
            isPlaying: boolean,
            duration: number,
            time: number,
            volume: number,
            lastVolume: number,
            currSong: {
                    idx:number,
                    songUrl:string,
                    imgUrl:string,
                    title:string,
            }
            currPlaylist: PlaylistType
    }