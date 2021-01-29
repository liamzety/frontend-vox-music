import React from 'react';
// Types
import { PlaylistType } from '../../types/Playlist';
// Styles
import {
  SongContainer,
  SongListContainer,
  SongThumbnail,
  SongTitle,
} from './songList-styles';
// Cmps
import { Button } from '../../aux-cmps/Button/Button';

interface SongListProps {
  currPlaylist: PlaylistType;
  onRemoveSong: (songId: string) => void;
  handleSongSelect: ({
    songUrl,
    idx,
    imgUrl,
    title,
  }: {
    songUrl: string;
    idx: number;
    imgUrl: string;
    title: string;
  }) => void;
}

export const SongList: React.FC<SongListProps> = ({
  currPlaylist,
  onRemoveSong,
  handleSongSelect,
}) => {
  if (currPlaylist.songs.length === 0) return <h1>Add new songs!</h1>;
  return (
    <div data-augmented-ui="tl-clip  tr-clip br-clip  bl-clip border">
      <SongListContainer>
        {currPlaylist.songs.map((song: any, idx: any) => {
          return (
            <SongContainer
              className="test"
              key={idx}
              onClick={() => {
                handleSongSelect({
                  songUrl: song.video_id,
                  imgUrl: song.url,
                  title: song.title,
                  idx,
                });
              }}
            >
              <SongThumbnail src={song.url} alt="" />
              <SongTitle>{song.title}</SongTitle>
              <Button
                cb={(ev: any) => {
                  ev.stopPropagation();
                  onRemoveSong(song._id);
                }}
                label="x88"
                size="small"
              >
                X
              </Button>
            </SongContainer>
          );
        })}
      </SongListContainer>
    </div>
  );
};
