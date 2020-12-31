const initialState = {
    templates: []
}

export function templateReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_TEMPLATES':
            return {
                ...state,
                templates: action.templates
            }
        case 'REMOVE_TEMPLATE':
            return {
                ...state,
                templates: state.templates.filter(template => template._id !== action.tempId)
            }
        case 'SAVE_TEMPLATE':
            const templateIdx = state.templates.findIndex(template => template._id === action.template._id)
            //NEW TEMPLATE
            if (templateIdx === -1) return { ...state, templates: [action.template, ...state.templates] }
            //UPDATE TEMPLATE
            else {
                const updatedTemplates = [...state.templates]
                updatedTemplates.splice(templateIdx, 1, action.template)
                return { ...state, templates: updatedTemplates }
            }
        default:
            return state
    }
}