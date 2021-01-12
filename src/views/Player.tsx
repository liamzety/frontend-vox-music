import React,{useEffect,useState} from 'react'
import { playlistService } from '../services/playlistService'
import { PlaylistType } from '../types/Playlist'

export function Player(props:any) {
    const [currPlaylist, setCurrPlaylist] = useState<PlaylistType>({
        url:'',
        title:'',
        description:''
    })
    useEffect(() => {
       getPlaylist(props.match.params.songId)
    }, [])
    const getPlaylist = async (playlistId:string) => {
       let currPlaylist = await playlistService.getById(playlistId)
       setCurrPlaylist(currPlaylist)
    }

  return (
    <div className="player">
         <img src={currPlaylist.url} alt="thumbnail" />
      <h1>{currPlaylist.title}</h1>  
    </div>
  )
}
