import React from 'react';
import { regService } from '../services/regService';

interface AutoSuggestProps {
  onAddSong: (suggestion: any) => void;
  suggestions: any;
}
export function AutoSuggest({ suggestions, onAddSong }: AutoSuggestProps) {
  return (
    <div>
      <ul>
        {suggestions.items.map((suggestion: any, idx: number) => {
          return (
            <li onClick={onAddSong.bind({}, suggestion)} key={idx}>
              {regService.replaceCharRef(suggestion.snippet.title)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
