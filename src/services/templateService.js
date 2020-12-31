import httpService from "./httpService"

export const templateService = {
    query,
    update,
    remove,
    add
}


async function query() {
    return await httpService.get('template')
}
async function add(template) {
    return await httpService.post('template', template);
}
function remove(tempId) {
    httpService.delete(`template/${tempId}`)

}
function update(tempToUpdate) {
    httpService.put(`template/${tempToUpdate._id}`, tempToUpdate)
}

