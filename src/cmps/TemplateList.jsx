import React from 'react'
import { Loader } from './Loader'
import { TemplatePreview } from './TemplatePreview'
export function TemplateList(props) {
    const { templates, onUpdateTemplate, onRemoveTemplate } = props

    if (!templates || templates.length === 0) return <Loader />
    return (
        <section className="template-list">
            {templates.map(template => {
                return (
                    <TemplatePreview
                        key={template._id}
                        template={template}
                        onUpdateTemplate={onUpdateTemplate}
                        onRemoveTemplate={onRemoveTemplate}
                    />
                )
            })}
        </section>
    )

}
