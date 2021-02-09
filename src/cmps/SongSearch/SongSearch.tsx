import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
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

  const handler = useCallback(
    debounce((suggestions: any, songToSuggest: string) => {
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

    /*** USE THIS FOR DEVELOPMENT (contains entries for 'cyberpunk' search word only)  ***/
    let suggestions: any;
    if (storageService.load('cyberpunk')) {
      suggestions = storageService.load('cyberpunk');
    } else {
      await storageService.save('cyberpunk', await getVideos('cyberpunk'));
      suggestions = storageService.load();
    }

    /*** USE THIS FOR PRODUCTION (enables youtube queries)  ***/
    // const suggestions = await getVideos(songToSuggest);

    /*** OPTIONAL -->  (save to storage new search words)    ***/
    // storageService.save('cyberpunk' /* change here */, await getVideos('cyberpunk' /* change here */));
    handler(suggestions, songToSuggest);
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
