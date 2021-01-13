import { SongType } from "../types/Song";
import httpService from "./httpService"

export const songService = {
    add,
    remove,
}


async function add(song:SongType) {
    return await httpService.post('song', song);
}
function remove(songId:string) {
    httpService.delete(`song/${songId}`)

}

