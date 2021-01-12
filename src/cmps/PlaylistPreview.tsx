import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Types
import {PlaylistType} from '../types/Playlist'

interface PlaylistPreviewProps {
    playlist:PlaylistType ;
    onRemovePlaylist:(tempId:string) => void;
     onUpdatePlaylist:(playlistToUpdate:PlaylistType) => void;
}
export const PlaylistPreview = ({ playlist, onRemovePlaylist, onUpdatePlaylist } :PlaylistPreviewProps) => {
    const [playlistToUpdate, setPlaylistToUpdate] = useState(playlist)

    const onUpdateTempInp = (ev:React.FormEvent<HTMLInputElement>) => {
        setPlaylistToUpdate({
            ...playlistToUpdate,
            [ev.currentTarget.name]: ev.currentTarget.value
        })
    }
    const _prettyUrl = (title:string) :string => {
        return title.replace(/\s/g, '_')
    }
    return (
        <Link to={`/player/${_prettyUrl(playlist.title)}=${playlist._id}`}>
        <div className="playlist-preview">
            {/* <p>{playlist.name}</p>
            <button onClick={() => onRemovePlaylist(playlist._id)}>Remove</button>
            <form onSubmit={ev => {
                ev.preventDefault()
                onUpdatePlaylist(playlistToUpdate)
            }}>
                <input placeholder="change name" name="name" onChange={onUpdateTempInp} type="text" />
                <button>Save</button>
            </form> */}
            <img src={playlist.url} />
            <h2>{playlist.title}</h2>
            {/* <button onClick={() => onRemovePlaylist(playlist._id!)}>Remove</button> */}
        </div>
        </Link>
    )
}
