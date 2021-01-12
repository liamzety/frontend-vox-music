import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Types
import {PlaylistType} from '../types/Playlist'

interface TemplatePreviewProps {
    template:PlaylistType ;
    onRemoveTemplate:(tempId:string) => void;
     onUpdateTemplate:(templateToUpdate:PlaylistType) => void;
}
export const TemplatePreview = ({ template, onRemoveTemplate, onUpdateTemplate } :TemplatePreviewProps) => {
    const [templateToUpdate, setTemplateToUpdate] = useState(template)

    const onUpdateTempInp = (ev:React.FormEvent<HTMLInputElement>) => {
        setTemplateToUpdate({
            ...templateToUpdate,
            [ev.currentTarget.name]: ev.currentTarget.value
        })
    }
    const _prettyUrl = (title:string) :string => {
        return title.replace(/\s/g, '_')
    }
    return (
        <Link to={`/player/${_prettyUrl(template.title)}=${template._id}`}>
        <div className="template-preview">
            {/* <p>{template.name}</p>
            <button onClick={() => onRemoveTemplate(template._id)}>Remove</button>
            <form onSubmit={ev => {
                ev.preventDefault()
                onUpdateTemplate(templateToUpdate)
            }}>
                <input placeholder="change name" name="name" onChange={onUpdateTempInp} type="text" />
                <button>Save</button>
            </form> */}
            <img src={template.url} />
            <h2>{template.title}</h2>
            {/* <button onClick={() => onRemoveTemplate(template._id!)}>Remove</button> */}
        </div>
        </Link>
    )
}
