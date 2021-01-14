import React from 'react';

export function SongList({ currPlaylist, handleSongSelect }: any) {
  if (currPlaylist.songs.length === 0) return <h1>Add new songs!</h1>;
  return (
    <ul>
      {currPlaylist.songs.map((song: any, idx: any) => {
        return (
          <li
            key={idx}
            onClick={() => {
              handleSongSelect({ songUrl: song.video_id, idx });
            }}
          >
            <h3>{song.title}</h3>
          </li>
        );
      })}
    </ul>
  );
}
