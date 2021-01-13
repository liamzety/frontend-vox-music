import React, { useEffect, useState } from 'react';
import { playlistService } from '../services/playlistService';
import { songService } from '../services/songService';
import { youtubeService } from '../services/youtubeService';
import { PlaylistType } from '../types/Playlist';
import { AutoSuggest } from '../cmps/AutoSuggest';
import { useObserver } from 'mobx-react';
import { useStore } from '../store/StoreContext';
export function Player(props: any) {
  const store = useStore();

  const [currPlaylist, setCurrPlaylist] = useState<PlaylistType>({
    _id: '',
    name: '',
    description: '',
    genre: '',
    img: '',
    songs: [],
  });

  useEffect(() => {
    getPlaylist(props.match.params.songId);
  }, []);

  const getPlaylist = async (playlistId: string) => {
    let { playlist, playlistSongs } = await playlistService.getById(playlistId);
    console.log('playlist', playlist);
    console.log('playlistSongs', playlistSongs);

    setCurrPlaylist({ ...playlist, songs: [...playlistSongs] });
  };

  const [songToSuggest, setSongToSuggest] = useState({
    name: '',
  });

  const [autoSuggest, setAutoSuggest] = useState({
    isOn: false,
    suggestions: [],
  });

  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    setSongToSuggest({ name: ev.currentTarget.value });
    const suggestions = await getVideos(songToSuggest.name!);
    setAutoSuggest((prevState) => {
      return {
        ...prevState,
        isOn: true,
        suggestions,
      };
    });
  }
  const onAddSong = async (snippet: any) => {
    const { title } = snippet;
    const { url } = snippet.thumbnails.default;
    const playlist_id = currPlaylist._id!;

    const songAdded = await songService.add({ title, url, playlist_id });
    setCurrPlaylist((prevState) => {
      return {
        ...prevState,
        songs: [songAdded, ...prevState.songs],
      };
    });
  };
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    console.log(res);
    return res;
  };
  return (
    <div className="player">
      <img src={currPlaylist.img} alt="thumbnail" />
      <h1>{currPlaylist.name}</h1>
      <h2>{currPlaylist.description}</h2>
      <p>Genre: {currPlaylist.genre}</p>
      {currPlaylist.songs.length > 0 ? (
        <ul>
          {currPlaylist.songs.map((song: any, idx: any) => {
            return <li key={idx}>{song.title}</li>;
          })}
        </ul>
      ) : (
        <h1>add new songs</h1>
      )}

      <input
        onChange={onAddSongInp}
        name="search"
        type="text"
        placeholder="song search"
      />

      {autoSuggest.isOn && (
        <AutoSuggest
          onAddSong={onAddSong}
          suggestions={autoSuggest.suggestions}
        />
      )}
    </div>
  );
}
