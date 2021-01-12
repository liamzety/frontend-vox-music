import React, { useState ,useEffect} from 'react'
import { youtubeService } from '../services/youtubeService'
import { PlaylistType } from '../types/Playlist'
import { AutoSuggest } from './AutoSuggest'


 interface PlaylistAddProps {
    onAddPlaylist: (songToSuggest:PlaylistType) => Promise<any>
  }
export  function PlaylistAdd({onAddPlaylist}:PlaylistAddProps){
    const [songToSuggest, setSongToSuggest] = useState({
        name:''
    })

    const [autoSuggest, setAutoSuggest] = useState({
        isOn:false,
        suggestions:[]
    })

      async function onAddTempInp(ev:React.FormEvent<HTMLInputElement>) {
          setSongToSuggest({ name: ev.currentTarget.value })
           const suggestions = await getVideos(songToSuggest.name!)
           console.log(suggestions)
           setAutoSuggest(prevState => {
                return {
                    ...prevState,
                    isOn:true,
                    suggestions
                }
            })
        }

        const getVideos = async (query:string) => {
          const res = await youtubeService.get(query)
          console.log({res})
          return res
        }
       
    return (
        <form className="playlist-add">
            <input onChange={onAddTempInp} name="name" type="text" placeholder="playlist" />
            {autoSuggest.isOn && <AutoSuggest 
            onAddPlaylist={onAddPlaylist}
            suggestions={autoSuggest.suggestions}/>}
            {/* {test.isOn &&
            <div>
                <img src={test.thumbnails.default.url} alt=""/>
                <h1>title:{test.title}</h1>
                <h1>desc:{test.description}</h1>
            </div>
            } */}
        </form>
    )
}
