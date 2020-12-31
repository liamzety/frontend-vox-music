import React, { useEffect } from 'react';
import { TemplateAdd } from './TemplateAdd';
import { TemplateList } from './TemplateList';
import { useDispatch, useSelector } from 'react-redux'
import { loadTemplates, addTemplate, removeTemplate, updateTemplate } from "../store/actions/templateActions";


export function Template() {
  const dispatch = useDispatch();
  const { templates } = useSelector((state) => state.templateReducer);

  useEffect(() => {
    dispatch(loadTemplates())
  }, [dispatch])


  function onAddTemplate(templateToAdd) {
    if (!templateToAdd) return
    dispatch(addTemplate(templateToAdd))
  }

  function onRemoveTemplate(tempId) {
    dispatch(removeTemplate(tempId))
  }

  function onUpdateTemplate(templateToUpdate) {
    dispatch(updateTemplate(templateToUpdate))
  }
  return (
    <section className="template-app">
      <h1 data-title="template">Template</h1>
      <TemplateList
        templates={templates}
        onUpdateTemplate={onUpdateTemplate}
        onRemoveTemplate={onRemoveTemplate} />

      <TemplateAdd onAddTemplate={onAddTemplate} />

    </section>
  );
}



