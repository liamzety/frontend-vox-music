import React from 'react';
// Services
import { regService } from '../../services/regService';
// Styles
import { AutoSuggestUl, SuggestedContainer } from './autoSuggest-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';

interface AutoSuggestProps {
  onAddSong: (suggestion: any) => void;
  suggestions: any;
}
export const AutoSuggest: React.FC<AutoSuggestProps> = ({
  suggestions,
  onAddSong,
}) => {
  return (
    <div>
      <AutoSuggestUl>
        {suggestions.items.map((suggestion: any, idx: number) => {
          return (
            <SuggestedContainer
              onClick={onAddSong.bind({}, suggestion)}
              key={idx}
            >
              <img src={suggestion.snippet.thumbnails.default.url} alt="" />
              <Text type="p">
                {console.log(suggestion.snippet)}
                {regService.replaceCharRef(suggestion.snippet.title)}
              </Text>
            </SuggestedContainer>
          );
        })}
      </AutoSuggestUl>
    </div>
  );
};
