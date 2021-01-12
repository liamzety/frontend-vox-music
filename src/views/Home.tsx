import React,{useEffect} from 'react'
// Cmps
import { Banner } from '../cmps/Banner'
import { PlaylistAdd } from '../cmps/PlaylistAdd';
import { PlaylistList } from '../cmps/PlaylistList';
// Service
import { playlistService } from '../services/playlistService';
// Types
import {PlaylistType} from '../types/Playlist'

import { useStore } from '../store/StoreContext';
import { youtubeService } from '../services/youtubeService';
import { useObserver } from 'mobx-react';
export function Home() {
  const store = useStore()
  useEffect(() => {
    getPlaylists()
  }, [])

  async function getPlaylists():Promise<void> {
    store.setPlaylists(await playlistService.query())
  }

  async function onAddPlaylist(snippet:any): Promise<void> {
    const playlistToAdd = {
      isOn:true,
           url:snippet.thumbnails.default.url,
         title:snippet.title,
         description:snippet.description

    }
    const playlistAdded = await playlistService.add(playlistToAdd)
    store.addPlaylist(playlistAdded)
  }

  function onRemovePlaylist(tempId:string):void {
    playlistService.remove(tempId)
    store.removePlaylist(tempId)
  }

  function onUpdatePlaylist(playlistToUpdate:PlaylistType):void {
    playlistService.update(playlistToUpdate)
    store.updatePlaylist(playlistToUpdate)
  }
  return useObserver(() => (
    <div className="home">
      <Banner />
      <PlaylistList
        playlists={store.playlists}
        onUpdatePlaylist={onUpdatePlaylist}
        onRemovePlaylist={onRemovePlaylist} />
      <PlaylistAdd onAddPlaylist={onAddPlaylist} />
    </div>

  ))
}
