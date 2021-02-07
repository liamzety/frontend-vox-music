import React from 'react';
// Store
import { observer } from 'mobx-react';
import { useStore } from '../../store/StoreContext';
// Icons
import { GoArrowSmallUp } from 'react-icons/go';
// Styles
import {
  SongContainer,
  SongListContainer,
  SongThumbnail,
} from './songList-styles';
// Cmps
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { RiDeleteBin4Fill } from 'react-icons/ri';

interface SongListProps {
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

export const SongList: React.FC<SongListProps> = observer(
  ({ onRemoveSong, handleSongSelect }) => {
    const { playerStore } = useStore();

    if (playerStore.player.currPlaylist.songs.length === 0)
      return (
        <div className="flex align-center justify-center m50">
          <Text type="h2">Add new songs!</Text>
          <Svg size="4rem" color="mainTxt">
            <GoArrowSmallUp />
          </Svg>
        </div>
      );
    return (
      <div data-augmented-ui="tl-clip  tr-clip br-clip  bl-clip border">
        <SongListContainer>
          {playerStore.player.currPlaylist.songs.map((song: any, idx: any) => {
            return (
              <SongContainer
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
                <div className="flex align-center space-between  w100">
                  <Text type="p" bold={true}>
                    {song.title}
                  </Text>
                  <Svg
                    color="mainTxt"
                    size="2rem"
                    cb={(ev: any) => {
                      ev.stopPropagation();
                      onRemoveSong(song._id);
                    }}
                  >
                    <RiDeleteBin4Fill />
                  </Svg>
                </div>
              </SongContainer>
            );
          })}
        </SongListContainer>
      </div>
    );
  }
);
