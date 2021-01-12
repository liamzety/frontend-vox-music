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
import {PlaylistType} from '../types/Playlist'
import { useStore } from '../store/StoreContext';
import { youtubeService } from '../services/youtubeService';

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

  async function onAddTemplate(snippet:any): Promise<void> {
    const templateToAdd = {
      isOn:true,
           url:snippet.thumbnails.default.url,
         title:snippet.title,
         description:snippet.description

    }
    const templateAdded = await templateService.add(templateToAdd)
    store.addTemplate(templateAdded)
  }

  function onRemoveTemplate(tempId:string):void {
    templateService.remove(tempId)
    store.removeTemplate(tempId)
  }

  function onUpdateTemplate(templateToUpdate:PlaylistType):void {
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



