import React from 'react'

export  function AutoSuggest({suggestions,onAddPlaylist}:any) {
    return (
        <div>
            <ul>
            {
            suggestions.items.map((suggestion:any,idx:number) => {
                return <li 
                onClick={onAddPlaylist.bind({},suggestion.snippet)}
                key={idx}>
                    {suggestion.snippet.title}
                </li>
            })
            }
            </ul>
        </div>
    )
}
