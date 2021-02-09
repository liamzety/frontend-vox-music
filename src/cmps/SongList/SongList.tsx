import React from 'react';
// Store
import { observer } from 'mobx-react';
import { useStore } from '../../store/StoreContext';
// Icons
import { GoArrowSmallUp } from 'react-icons/go';
import { RiDeleteBin4Fill } from 'react-icons/ri';
// Styles
import {
  SongContainer,
  SongListContainer,
  SongListWrapper,
  SongThumbnail,
} from './SongList.styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';

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
        <div className="flex align-center  m50">
          <Text type="h2">Add new songs!</Text>
          <Svg size="4rem" color="mainTxt">
            <GoArrowSmallUp />
          </Svg>
        </div>
      );
    return (
      <SongListWrapper data-augmented-ui="tl-clip  tr-clip br-clip  bl-clip border">
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
                    size="2rem"
                    onClick={(ev: any) => {
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
      </SongListWrapper>
    );
  }
);
