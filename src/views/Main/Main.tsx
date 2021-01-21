import React, { useEffect, useState } from 'react';
import { playlistService } from '../../services/playlistService';
import { PlaylistType } from '../../types/Playlist';
import { Player } from '../../cmps/Player/Player';
import { useStore } from '../../store/StoreContext';
import { SongList } from '../../cmps/SongList/SongList';
import { SongSearch } from '../../cmps/SongSearch/SongSearch';
import { songService } from '../../services/songService';
import { regService } from '../../services/regService';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  songId: string;
}
interface Props extends RouteComponentProps<MatchParams> {}
export const Main: React.FC<Props> = ({
  match: {
    params: { songId },
  },
}) => {
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
    getPlaylist(songId);
  }, [songId]);

  const getPlaylist = async (playlistId: string) => {
    let { playlist, playlistSongs } = await playlistService.getById(playlistId);
    setCurrPlaylist({ ...playlist, songs: [...playlistSongs] });
  };

  const [currPlaying, setCurrPlaying] = useState({
    songUrl: '',
    idx: null,
  });
  const onAddSong = async (songData: any) => {
    const video_id = songData.id.videoId;
    if (findIfExsits(video_id)) {
      store.alert('This song has already been added!', 'alert');
      store.clearAlert();
      return;
    }

    let { title } = songData.snippet;
    title = regService.replaceCharRef(title);
    const { url } = songData.snippet.thumbnails.default;
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
  const handleNextPrevSong = (val: string, idx: number) => {
    const nextSongIdx = idx + 1 > currPlaylist.songs.length - 1 ? 0 : idx + 1;
    const nextSongUrl = currPlaylist.songs[nextSongIdx].video_id;

    const prevSongIdx = idx - 1 < 0 ? currPlaylist.songs.length - 1 : idx - 1;
    const prevSongUrl = currPlaylist.songs[prevSongIdx].video_id;

    if (val === 'next') {
      setCurrPlaying({ songUrl: nextSongUrl, idx: nextSongIdx });
    } else {
      setCurrPlaying({ songUrl: prevSongUrl, idx: prevSongIdx });
    }
  };
  // Checks if the song the user wants to add already exsits in the playlist
  const findIfExsits = (video_id: string): boolean => {
    return currPlaylist.songs.some((song) => song.video_id === video_id);
  };
  // When user selects a song
  const handleSongSelect = (data: { songUrl: string; idx: number }): void => {
    setCurrPlaying(data);
  };
  const onRemovePlaylist = (playlistId: string): void => {
    playlistService.remove(playlistId);
    store.removePlaylist(playlistId);
  };
  return (
    <div className="container-y">
      <div className="container-x ">
        <img src={currPlaylist.img} alt="thumbnail" />
        <h1>{currPlaylist.name}</h1>
        <h2>{currPlaylist.description}</h2>
        <p>Genre: {currPlaylist.genre}</p>
        <Link to={`/`}>
          <button
            onClick={() => {
              onRemovePlaylist(currPlaylist._id!);
            }}
          >
            Delete Playlist
          </button>
        </Link>
        <SongList
          handleSongSelect={handleSongSelect}
          currPlaylist={currPlaylist}
        />
        <SongSearch onAddSong={onAddSong} />
      </div>
      <Player
        currPlayingUrl={currPlaying.songUrl}
        idx={currPlaying.idx}
        handleNextPrevSong={handleNextPrevSong}
      />
    </div>
  );
};
