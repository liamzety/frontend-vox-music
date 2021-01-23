import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
// Services
import { youtubeService } from '../../services/youtubeService';
import { storageService } from '../../services/storageService';
// Cmps
import { AutoSuggest } from '../AutoSuggest/AutoSuggest';

interface songSearchProps {
  onAddSong: (suggestion: any) => void;
}
export const SongSearch: React.FC<songSearchProps> = ({ onAddSong }) => {
  const [songToSuggest, setSongToSuggest] = useState({
    name: '',
  });
  const [autoSuggest, setAutoSuggest] = useState({
    isOn: false,
    suggestions: [],
  });

  const handler = useCallback(
    debounce((suggestions: any) => {
      setAutoSuggest((prevState: any) => {
        return {
          ...prevState,
          isOn: true,
          suggestions,
        };
      });
    }, 800),
    []
  );

  // Fires when a user searches for songs to add
  async function onAddSongInp(ev: React.FormEvent<HTMLInputElement>) {
    setSongToSuggest({ name: ev.currentTarget.value });

    /*** USE THIS FOR DEVELOPMENT (contains entries for 'cyberpunk' search word only)  ***/
    let suggestions: any;
    if (storageService.load('cyberpunk')) {
      suggestions = storageService.load('cyberpunk');
    } else {
      await storageService.save('cyberpunk', await getVideos('cyberpunk'));
      suggestions = storageService.load();
    }

    /*** USE THIS FOR PRODUCTION (enables youtube queries)  ***/
    // const suggestions = await getVideos(songToSuggest.name!);

    /*** OPTIONAL -->  (save to storage new search words)    ***/
    // storageService.save('cyberpunk' /* change here */, await getVideos('cyberpunk' /* change here */));
    handler(suggestions);
  }
  const getVideos = async (query: string) => {
    const res = await youtubeService.get(query);
    return res;
  };
  return (
    <>
      <input
        onChange={onAddSongInp}
        name="search"
        type="text"
        placeholder="song search"
      />
      {autoSuggest.isOn && (
        <AutoSuggest
          onAddSong={onAddSong}
          suggestions={autoSuggest.suggestions}
        />
      )}
    </>
  );
};
