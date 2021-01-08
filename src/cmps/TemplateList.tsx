import React from 'react'
import { Loader } from './Loader'
import { TemplatePreview } from './TemplatePreview'
import { useObserver } from 'mobx-react';
// Types
import { TemplateType } from '../types/Template';

interface TemplateListProps {
    templates:TemplateType[]
    onUpdateTemplate:(templateToUpdate:TemplateType) => void
    onRemoveTemplate:(tempId:string) => void
  }
export function TemplateList({templates, onUpdateTemplate, onRemoveTemplate}:TemplateListProps) {
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
