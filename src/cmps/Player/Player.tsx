import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayerContainer, PlayerWrapper } from './player-styles';
import { PlayerType } from '../../types/Player';

interface PlayerProps {
  currPlayingUrl: string;
  idx: number;
  handleNextPrevSong: (val: string, idx: number) => void;
}
export const Player: React.FC<PlayerProps> = ({
  currPlayingUrl,
  idx,
  handleNextPrevSong,
}) => {
  const [player, setPlayer] = useState<PlayerType>({
    isPlaying: false,
    duration: null,
    time: 0,
    volume: 0.3,
    isMuted: false,
  });
  const reactPlayerRef = useRef(null);

  const togglePlay = () => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        isPlaying: !prevState.isPlaying,
      };
    });
  };
  //  Update player.duration when a song is loaded
  const setDuration = (duration: number) => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        duration,
      };
    });
  };
  // Update player.time every second
  const handleProgress = (progressData: any) => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        time: progressData.playedSeconds,
      };
    });
  };
  // When user slides and selects different timelapse
  const handleSongTime = (ev: any) => {
    const timestamp = +ev.currentTarget.value;
    reactPlayerRef.current.seekTo(timestamp, 'seconds');
    setPlayer((prevState) => {
      return {
        ...prevState,
        time: timestamp,
      };
    });
  };
  // When user slides and selects different volume
  const handleSongVolume = (ev: any) => {
    const volume = +ev.currentTarget.value;
    setPlayer((prevState) => {
      return {
        ...prevState,
        volume,
      };
    });
  };
  const toggleSongMute = () => {
    setPlayer((prevState) => {
      return {
        ...prevState,
        isMuted: !prevState.isMuted,
      };
    });
  };

  const _getFormattedMinutes = (duration: number) => {
    if (!duration) return '0:00';
    if (duration >= 86400) return 'Live';

    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = '';

    if (hrs > 0) {
      ret += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }

    ret += '' + mins + ':' + (secs < 10 ? '0' : '');
    ret += '' + secs;
    return ret;
  };

  return (
    <PlayerWrapper className={`${currPlayingUrl ? '' : 'hidden'}`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${currPlayingUrl}`}
        playing={player.isPlaying}
        onReady={() => {
          reactPlayerRef.current.seekTo(0, 'seconds');
        }}
        onDuration={setDuration}
        onProgress={handleProgress}
        volume={player.volume}
        muted={player.isMuted}
        ref={reactPlayerRef}
        hidden
      />

      <PlayerContainer>
        <button onClick={togglePlay}>Play</button>
        <input
          onChange={handleSongTime}
          type="range"
          value={player.time}
          min="0"
          max={player.duration}
          step="1"
        />
        <input
          onChange={handleSongVolume}
          type="range"
          value={player.volume}
          min="0"
          max="1"
          step="0.01"
        />
        <button onClick={toggleSongMute}>mute</button>
        <p>
          {_getFormattedMinutes(player.time)} /{' '}
          {_getFormattedMinutes(player.duration)}
        </p>

        <button onClick={handleNextPrevSong.bind({}, 'next', idx)}>
          NEXT SONG
        </button>
        <button onClick={handleNextPrevSong.bind({}, 'prev', idx)}>
          PREV SONG
        </button>
      </PlayerContainer>
    </PlayerWrapper>
  );
};
