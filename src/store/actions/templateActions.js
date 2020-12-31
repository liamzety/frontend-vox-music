import { templateService } from '../../services/templateService'

//GET
export function loadTemplates() {
    return async dispatch => {
        const templates = await templateService.query()
        dispatch({ type: 'SET_TEMPLATES', templates })
    }
}
//ADD
export function addTemplate(templateToSave) {
    return async dispatch => {
        const template = await templateService.add(templateToSave)
        dispatch({ type: 'SAVE_TEMPLATE', template })
    }
}
//UPDATE
export function updateTemplate(template) {
    return dispatch => {
        templateService.update(template)
        dispatch({ type: 'SAVE_TEMPLATE', template })
    }
}
//REMOVE
export function removeTemplate(tempId) {
    return dispatch => {
        templateService.remove(tempId)
        dispatch({ type: 'REMOVE_TEMPLATE', tempId })
    }
}

