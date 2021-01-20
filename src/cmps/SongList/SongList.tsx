import React from 'react';
import { PlaylistType } from '../../types/Playlist';
// Styles
import {
  SongContainer,
  SongListContainer,
  SongThumbnail,
  SongTitle,
} from './songList-styles';
interface SongListProps {
  currPlaylist: PlaylistType;
  handleSongSelect: ({
    songUrl,
    idx,
  }: {
    songUrl: string;
    idx: number;
  }) => void;
}
export const SongList: React.FC<SongListProps> = ({
  currPlaylist,
  handleSongSelect,
}) => {
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
};
