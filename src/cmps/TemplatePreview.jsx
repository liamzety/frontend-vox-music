import React, { useState } from 'react'

export function TemplatePreview(props) {
    const { template, onRemoveTemplate, onUpdateTemplate } = props
    const [templateToUpdate, setTemplateToUpdate] = useState(template)

    function onUpdateTempInp(ev) {
        setTemplateToUpdate({
            ...templateToUpdate,
            [ev.target.name]: ev.target.value
        })
    }
    return (
        <div className="template-preview">
            <p>{template.name}</p>
            <button onClick={() => onRemoveTemplate(template._id)}>Remove</button>
            <form onSubmit={ev => {
                ev.preventDefault()
                onUpdateTemplate(templateToUpdate)
            }}>
                <input placeholder="change name" name="name" onChange={onUpdateTempInp} type="text" />
                <input placeholder="change color" name="hairColor" onChange={onUpdateTempInp} type="text" />
                <button>Save</button>
            </form>
        </div>
    )
}
