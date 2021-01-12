import React from 'react'
import { Loader } from './Loader'
import { PlaylistPreview } from './PlaylistPreview'
import { useObserver } from 'mobx-react';
// Types
import { PlaylistType } from '../types/Playlist';

interface PlaylistListProps {
    playlists:PlaylistType[]
    onUpdatePlaylist:(playlistToUpdate:PlaylistType) => void
    onRemovePlaylist:(playlistId:string) => void
  }
export function PlaylistList({playlists, onUpdatePlaylist, onRemovePlaylist}:PlaylistListProps) {
    return useObserver(() => (
        !playlists || playlists.length === 0 ?
            <Loader />
            :
            <section className="playlist-list">
                {playlists.map(playlist => {
                    return (
                        <PlaylistPreview
                            key={playlist._id}
                            playlist={playlist}
                            onUpdatePlaylist={onUpdatePlaylist}
                            onRemovePlaylist={onRemovePlaylist}
                        />
                    )
                })}
            </section>
    )

    )

}
