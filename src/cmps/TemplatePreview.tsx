import React, { useState } from 'react'
// Types
import {TemplateType} from '../types/Template'

interface TemplatePreviewProps {
    template:TemplateType ;
    onRemoveTemplate:(tempId:string) => void;
     onUpdateTemplate:(templateToUpdate:TemplateType) => void;
}
export function TemplatePreview({ template, onRemoveTemplate, onUpdateTemplate }:TemplatePreviewProps) {
    const [templateToUpdate, setTemplateToUpdate] = useState(template)

    function onUpdateTempInp(ev:React.FormEvent<HTMLInputElement>) {
        setTemplateToUpdate({
            ...templateToUpdate,
            [ev.currentTarget.name]: ev.currentTarget.value
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
