import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
// Store
import { useStore } from '../../store/StoreContext';
// Services
import { youtubeService } from '../../services/youtubeService';
import { storageService } from '../../services/storageService';
// Styles
import { SongSearchContainer } from './SongSearch.styles';
// Cmps
import { AutoSuggest } from '../AutoSuggest/AutoSuggest';
import { Input } from '../../aux-cmps/Input/Input';

interface songSearchProps {
  onAddSong: (suggestion: any) => void;
}
export const SongSearch: React.FC<songSearchProps> = ({ onAddSong }) => {
  const [autoSuggest, setAutoSuggest] = useState({
    isOn: false,
    suggestions: [],
  });
  const { userMsgStore } = useStore();
  const handler = useCallback(
    debounce(async (songToSuggest: string) => {
      /*** USE THIS FOR DEVELOPMENT (contains entries with fallbackQuery constant (at storageService))  ***/
      let suggestions: any;
      if (storageService.load('fallbackQuery')) {
        suggestions = storageService.load('fallbackQuery');
      } else {
        await storageService.save('fallbackQuery');
        suggestions = storageService.load('fallbackQuery');
      }

      /*** USE THIS FOR PRODUCTION (enables youtube queries)  ***/
      // const suggestions = await getVideos(songToSuggest);

      setAutoSuggest((prevState: any) => {
        return {
          ...prevState,
          isOn: !songToSuggest ? false : true,
          suggestions,
        };
      });
    }, 800),
    []
  );
  const closeAutoSuggest = () => {
    setAutoSuggest(() => ({ isOn: false, suggestions: [] }));
  };
  // Fires when a user searches for songs to add
  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    const songToSuggest = ev.currentTarget.value;

    try {
      /*** OPTIONAL -->  (save to storage new search words)    ***/
      // storageService.save('cyberpunk' /* change here */, await getVideos('cyberpunk' /* change here */));
      handler(songToSuggest);
    } catch (err) {
      if (err.response.status === 403) {
        console.log('Error (Probably exceeded YouTube Points...)', err);
        userMsgStore.alert({
          type: 'alert',
          msg:
            "Dear Recruiter/Developer - YouTube API's Points have run out for the day.</br>Unfortunately it will only replenish tomorrow.</br>As this is a demo site for recruiters i did not purchase a pack.</br>This message will close in 20 seconds.",
        });
        setTimeout(() => {
          userMsgStore.clearAlert();
        }, 20000);
      }
    }
  }
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    return res;
  };
  return (
    <SongSearchContainer>
      <Input
        onChange={onAddSongInp}
        name="search"
        type="text"
        placeholder="song search"
      />
      <AutoSuggest
        closeAutoSuggest={closeAutoSuggest}
        isOn={autoSuggest.isOn}
        onAddSong={onAddSong}
        suggestions={autoSuggest.suggestions}
      />
    </SongSearchContainer>
  );
};
