import React from 'react'
import { Loader } from './Loader'
import { TemplatePreview } from './TemplatePreview'
import { useObserver } from 'mobx-react';

export function TemplateList(props) {
    const { templates, onUpdateTemplate, onRemoveTemplate } = props

    return useObserver(() => (
        !templates || templates.length === 0 ?
            <Loader />
            :
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

    )

}
