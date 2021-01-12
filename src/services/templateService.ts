import httpService from "./httpService"
import {PlaylistType} from '../types/Playlist'

export const templateService = {
    query,
    update,
    remove,
    add
}

async function query() {
    const templates = await httpService.get('template')
    return templates
}
async function add(template:PlaylistType) {
    return await httpService.post('template', template);
}
function remove(tempId:string) {
    httpService.delete(`template/${tempId}`)

}
function update(tempToUpdate:PlaylistType) {
    httpService.put(`template/${tempToUpdate._id}`, tempToUpdate)
}

