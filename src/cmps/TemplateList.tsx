import React from 'react'
import { Loader } from './Loader'
import { TemplatePreview } from './TemplatePreview'
import { useObserver } from 'mobx-react';
// Types
import { PlaylistType } from '../types/Playlist';

interface TemplateListProps {
    templates:PlaylistType[]
    onUpdateTemplate:(templateToUpdate:PlaylistType) => void
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
