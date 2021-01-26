import {PlaylistType} from './Playlist'

export interface PlayerType {
            isOn:boolean,
            isPlaying: boolean,
            duration: number,
            time: number,
            volume: number,
            lastVolume: number,
            idx:number,
            songUrl:string,
            currPlaylist: PlaylistType
    }