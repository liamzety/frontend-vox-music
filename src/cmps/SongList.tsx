import React from 'react';
// Styles
import {
  SongContainer,
  SongListContainer,
  SongThumbnail,
  SongTitle,
} from '../assets/style/components/songList';

export function SongList({ currPlaylist, handleSongSelect }: any) {
  if (currPlaylist.songs.length === 0) return <h1>Add new songs!</h1>;
  return (
    <SongListContainer>
      {currPlaylist.songs.map((song: any, idx: any) => {
        return (
          <SongContainer
            className="test"
            key={idx}
            onClick={() => {
              handleSongSelect({ songUrl: song.video_id, idx });
            }}
          >
            <SongThumbnail src={song.url} alt="" />
            <SongTitle>{song.title}</SongTitle>
          </SongContainer>
        );
      })}
    </SongListContainer>
  );
}
