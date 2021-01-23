import { PlayerType } from "../../types/Player"

export  const createPlayerStore = {
        player: {
             isPlaying: true,
    duration: null,
    time: 0,
    volume: 0.3,
    isMuted: false,
        } as PlayerType ,
        setPlayer: function(player:PlayerType)  {
            this.player = player
        },
        
   
}

