import httpService from "./httpService"
import {PlaylistType} from '../types/Playlist'

export const playlistService = {
    query,
    update,
    remove,
    add,
    getById
}

async function query() {
    const templates = await httpService.get('template')
    return templates
}
async function add(template:PlaylistType) {
    return await httpService.post('template', template);
}
async function getById(playlistId:string)   {
    return await httpService.get(`template/${playlistId}`);
}
function remove(tempId:string) {
    httpService.delete(`template/${tempId}`)

}
function update(tempToUpdate:PlaylistType) {
    httpService.put(`template/${tempToUpdate._id}`, tempToUpdate)
}

