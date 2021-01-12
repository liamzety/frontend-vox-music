import React,{useEffect,useState} from 'react'
import { playlistService } from '../services/playlistService'
import { PlaylistType } from '../types/Playlist'

export function Player(props:any) {
    const [currPlaylist, setCurrPlaylist] = useState<PlaylistType>({
      name:'',
      description:'',
      genre:'',
      img: '',
      songs:[]
    })
    useEffect(() => {
       getPlaylist(props.match.params.songId)
    }, [])
       const getPlaylist = async (playlistId:string) => {
       let currPlaylist = await playlistService.getById(playlistId)
       console.log({currPlaylist})
       setCurrPlaylist(currPlaylist!)
      }

  return (
    <div className="player">
         <img src={currPlaylist.img} alt="thumbnail" />
      <h1>{currPlaylist.name}</h1>  
      <h2>{currPlaylist.description}</h2>  
      <p>Genre: {currPlaylist.genre}</p>
      <ul>
        {currPlaylist.songs.map((song:any,idx:any) => {
         return <li key={idx}>{song.title}</li>
        })}
      </ul>
    </div>
  )
}
