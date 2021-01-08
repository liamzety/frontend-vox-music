import React, { useEffect } from 'react';
import { useObserver } from 'mobx-react';
// Cmps
import { TemplateAdd } from './TemplateAdd';
import { TemplateList } from './TemplateList';
// Service
import { templateService } from '../services/templateService';
// Styles
import styled from 'styled-components';
// Types
import {TemplateType} from '../types/Template'
import { useStore } from '../store/StoreContext';

const MainSection = styled.section`
background-color:${({ theme }) => theme.mainSection};
color: ${({ theme }) => theme.mainSectionTxt};
`;
const Title = styled.h1`
color: ${({ theme }) => theme.mainSectionTitle};
`;

export function Template() {
  const store = useStore()
  useEffect(() => {
    getTemplates()
  }, [])

  async function getTemplates():Promise<void> {
    store.setTemplates(await templateService.query())
  }

  async function onAddTemplate(templateToAdd:TemplateType): Promise<void> {
    const templateAdded = await templateService.add(templateToAdd)
    store.addTemplate(templateAdded)
  }

  function onRemoveTemplate(tempId:string):void {
    templateService.remove(tempId)
    store.removeTemplate(tempId)
  }

  function onUpdateTemplate(templateToUpdate:TemplateType):void {
    templateService.update(templateToUpdate)
    store.updateTemplate(templateToUpdate)
  }

  return useObserver(() => (
    <MainSection>
      <Title>Template</Title>
      <TemplateList
        templates={store.templates}
        onUpdateTemplate={onUpdateTemplate}
        onRemoveTemplate={onRemoveTemplate} />
      <TemplateAdd onAddTemplate={onAddTemplate} />
    </MainSection>

  ));
}



