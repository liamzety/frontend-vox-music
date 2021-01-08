import React, { useState } from 'react'
import {TemplateType} from '../types/Template'


 interface TemplateAddProps {
    onAddTemplate: (templateToAdd:TemplateType) => Promise<any>
  }
export  function TemplateAdd({onAddTemplate}:TemplateAddProps){
    const [templateToAdd, setTemplateToAdd] = useState<TemplateType>({
        name:'',
        hairColor:'',
        _id:''
    })

     function onAddTempInp(ev:React.FormEvent<HTMLInputElement>) {
        setTemplateToAdd({
            ...templateToAdd,
            [ev.currentTarget.name]: ev.currentTarget.value
        })
    }
    return (
        <form className="template-add"
            onSubmit={ev => {
                ev.preventDefault()
                onAddTemplate(templateToAdd)

            }}>
            <input onChange={onAddTempInp} name="name" type="text" placeholder="template" />
            <input onChange={onAddTempInp} name="hairColor" type="text" placeholder="hair color" />
            <button>Add template</button>
        </form>
    )
}
