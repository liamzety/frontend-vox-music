import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import { PlayerContainer, PlayerWrapper } from './player-styles';
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';

export const Player: React.FC = observer(() => {
  const store = useStore();
  const { player } = store;
  const reactPlayerRef = useRef(null);

  const togglePlay = () => {
    store.setPlayer({ isPlaying: !player.isPlaying });
  };
  //  Update player.duration when a song is loaded
  const setDuration = (duration: number) => {
    store.setPlayer({ duration });
  };
  // Update player.time every second
  const handleProgress = (progressData: any) => {
    store.setPlayer({ time: progressData.playedSeconds });
  };
  // When user slides and selects different timelapse
  const handleSongTime = (ev: any) => {
    const timestamp = +ev.currentTarget.value;
    reactPlayerRef.current.seekTo(timestamp, 'seconds');
    store.setPlayer({ time: timestamp });
  };
  // When user slides and selects different volume
  const handleSongVolume = (ev: any) => {
    const volume = +ev.currentTarget.value;
    store.setPlayer({ volume });
  };
  const toggleSongMute = () => {
    store.setPlayer({ isMuted: !player.isMuted });
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
    <PlayerWrapper className={`${player.isOn ? '' : 'hidden'}`}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${player.songUrl}`}
        playing={player.isPlaying}
        onReady={() => {
          console.log('ready');
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

        <button onClick={store.handleNextPrevSong.bind({}, 'next', player.idx)}>
          NEXT SONG
        </button>
        <button onClick={store.handleNextPrevSong.bind({}, 'prev', player.idx)}>
          PREV SONG
        </button>
      </PlayerContainer>
    </PlayerWrapper>
  );
});
