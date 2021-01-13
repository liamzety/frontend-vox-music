import httpService from "./httpService"
import {PlaylistType} from '../types/Playlist'
import { songService } from "./songService"

export const playlistService = {
    query,
    update,
    remove,
    add,
    getById
}


async function query() {
    const playlists = await httpService.get('playlist')
    return playlists
}
async function add(playlist:PlaylistType) {
    return await httpService.post('playlist', playlist);
}
async function getById(playlistId:string)   {
    return await httpService.get(`playlist/${playlistId}`);

}
function remove(playlistId:string) {
    httpService.delete(`playlist/${playlistId}`)

}
function update(playlistToUpdate:PlaylistType) {
    httpService.put(`playlist/${playlistToUpdate._id}`, playlistToUpdate)
}

