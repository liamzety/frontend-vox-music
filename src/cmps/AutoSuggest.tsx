import React from 'react';
import { regService } from '../services/regService';

export function AutoSuggest({ suggestions, onAddSong }: any) {
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
