import { SongType } from "../../types/Song";

export const createSongStore = {
        song: {} as SongType,
        setSong: function(song:SongType) {
            console.log('setting song:  ',song )
        }
}
