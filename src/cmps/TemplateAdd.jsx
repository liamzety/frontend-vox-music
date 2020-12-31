import React, { useState } from 'react'

export function TemplateAdd(props) {
    const [templateToAdd, setTemplateToAdd] = useState(null)

    function onAddTempInp(ev) {
        setTemplateToAdd({
            ...templateToAdd,
            [ev.target.name]: ev.target.value
        })
    }
    return (
        <form className="template-add"
            onSubmit={ev => {
                ev.preventDefault()
                props.onAddTemplate(templateToAdd)

            }}>
            <input onChange={onAddTempInp} name="name" type="text" placeholder="template" />
            <input onChange={onAddTempInp} name="hairColor" type="text" placeholder="hair color" />
            <button>Add template</button>
        </form>
    )
}
