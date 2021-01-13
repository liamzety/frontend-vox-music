import React, { useEffect, useState } from 'react';
import { playlistService } from '../services/playlistService';
import { songService } from '../services/songService';
import { youtubeService } from '../services/youtubeService';
import { PlaylistType } from '../types/Playlist';
import { AutoSuggest } from '../cmps/AutoSuggest';
import { Player } from '../cmps/Player';

export function Main(props: any) {
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
  const [currPlaying, setCurrPlaying] = useState(null);
  const onAddSong = async (songData: any) => {
    const { title } = songData.snippet;
    const { url } = songData.snippet.thumbnails.default;
    const video_id = songData.id.videoId;

    const playlist_id = currPlaylist._id!;
    const songAdded = await songService.add({
      title,
      url,
      video_id,
      playlist_id,
    });

    setCurrPlaylist((prevState) => {
      return {
        ...prevState,
        songs: [songAdded, ...prevState.songs],
      };
    });
  };
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    return res;
  };
  return (
    <div className="main">
      <img src={currPlaylist.img} alt="thumbnail" />
      <h1>{currPlaylist.name}</h1>
      <h2>{currPlaylist.description}</h2>
      <p>Genre: {currPlaylist.genre}</p>
      {currPlaylist.songs.length > 0 ? (
        <ul>
          {currPlaylist.songs.map((song: any, idx: any) => {
            return (
              <li
                key={idx}
                onClick={() => {
                  setCurrPlaying(song.video_id);
                }}
              >
                <h3>{song.title}</h3>
              </li>
            );
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

      {/* <h1>player</h1>
      <iframe
        title="UNIQRE"
        src={`https://www.youtube.com/embed/${currPlaying}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      ></iframe> */}
      <Player currPlayingUrl={currPlaying} />
    </div>
  );
}
