import {PlaylistType} from './Playlist'

export interface PlayerType {
            isOn:boolean,
            isPlaying: boolean,
            duration: number,
            time: number,
            volume: number,
            isMuted: boolean,
            idx:number,
            songUrl:string,
            currPlaylist: PlaylistType
    }