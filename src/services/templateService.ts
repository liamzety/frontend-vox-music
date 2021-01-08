import httpService from "./httpService"
import {TemplateType} from '../types/Template'

export const templateService = {
    query,
    update,
    remove,
    add
}

async function query() {
    const templates = await httpService.get('template')
    console.log('templates', templates)
    return templates
}
async function add(template:TemplateType) {
    return await httpService.post('template', template);
}
function remove(tempId:string) {
    httpService.delete(`template/${tempId}`)

}
function update(tempToUpdate:TemplateType) {
    httpService.put(`template/${tempToUpdate._id}`, tempToUpdate)
}

