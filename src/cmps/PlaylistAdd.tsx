import { values } from 'mobx'
import React, { useState ,useEffect} from 'react'
import { youtubeService } from '../services/youtubeService'
import { PlaylistType } from '../types/Playlist'
import { AutoSuggest } from './AutoSuggest'


 interface PlaylistAddProps {
    onAddPlaylist: (songToSuggest:PlaylistType) => Promise<any>
  }
export  function PlaylistAdd({onAddPlaylist}:PlaylistAddProps){
    const DEFAULT_IMG = "https://picsum.photos/200"
    const DEFAULT_NAME = "My New Playlist!"
    const DEFAULT_DESCRIPTION = "This is my awesome playlist!"
    const DEFAULT_GENRE = "cyberpunk"
    const DEFAULT_SONGS = [
        {
            title:"songname1",
            url:"songurl"
        },
        {
            title:"songname2",
            url:"songurl"
        },
        {
            title:"songname3",
            url:"songurl"
        }
    ]
    const [songToSuggest, setSongToSuggest] = useState({
        name:''
    })

    const [autoSuggest, setAutoSuggest] = useState({
        isOn:false,
        suggestions:[]
    })

    const [playlistToAdd, setPlaylistToAdd] = useState<PlaylistType>({
        name:DEFAULT_NAME,
        description:DEFAULT_DESCRIPTION,
        genre:DEFAULT_GENRE,
        img:DEFAULT_IMG,
        songs:DEFAULT_SONGS
    })
      async function onAddPlaylistInp(ev:React.FormEvent<HTMLInputElement>) {
        const {value,name} = ev.currentTarget
        setPlaylistToAdd(prevState => {
                    return {
                        ...prevState,
                        [name]:value,
                    }
                })
        //   setSongToSuggest({ name: ev.currentTarget.value })
        //    const suggestions = await getVideos(songToSuggest.name!)
        //    console.log(suggestions)
        //    setAutoSuggest(prevState => {
        //         return {
        //             ...prevState,
        //             isOn:true,
        //             suggestions
        //         }
        //     })
        }

        const getVideos = async (query:string) => {
          const res = await youtubeService.get(query)
          console.log({res})
          return res
        }
       
    return (
        <form className="playlist-add"
        onSubmit={ev => {
            ev.preventDefault()
            onAddPlaylist(playlistToAdd)
        }}>
            <input onChange={onAddPlaylistInp} name="img" type="file" placeholder="playlist img" />
            <input onChange={onAddPlaylistInp} name="name" type="text" placeholder="playlist name" />
            <input onChange={onAddPlaylistInp} name="genre" type="text" placeholder="playlist genre" />
            <input onChange={onAddPlaylistInp} name="description" type="text" placeholder="playlist description" />
            <button>ok</button>
            {/* {autoSuggest.isOn && <AutoSuggest 
            onAddPlaylist={onAddPlaylist}
            suggestions={autoSuggest.suggestions}/>} */}
            {/* {test.isOn &&
            <div>
                <img src={test.thumbnails.default.url} alt=""/>
                <h1>title:{test.title}</h1>
                <h1>description:{test.description}</h1>
            </div>
            } */}
        </form>
    )
}
