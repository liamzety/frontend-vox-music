import React, { useEffect } from 'react';
import { StoreContext } from '../store';
import { useObserver } from 'mobx-react';
// Cmps
import { TemplateAdd } from './TemplateAdd';
import { TemplateList } from './TemplateList';
// Styles
import styled from 'styled-components';
import { templateService } from '../services/templateService';

const MainSec = styled.section`
background-color:${({ theme }) => theme.mainSec};
color: ${({ theme }) => theme.mainSecTxt};
`;
const Title = styled.h1`
`;

export function Template() {
  const store = React.useContext(StoreContext)
  useEffect(() => {
    getTemplates()
  }, [])

  async function getTemplates() {
    store.setTemplates(await templateService.query())
  }

  async function onAddTemplate(templateToAdd) {
    const templateAdded = await templateService.add(templateToAdd)
    store.addTemplate(templateAdded)
  }

  function onRemoveTemplate(tempId) {
    templateService.remove(tempId)
    store.removeTemplate(tempId)
  }

  function onUpdateTemplate(templateToUpdate) {
    templateService.update(templateToUpdate)
    store.updateTemplate(templateToUpdate)
  }
  return useObserver(() => (
    <MainSec>
      <Title>Template</Title>
      <TemplateList
        templates={store.templates}
        onUpdateTemplate={onUpdateTemplate}
        onRemoveTemplate={onRemoveTemplate} />
      <TemplateAdd onAddTemplate={onAddTemplate} />
    </MainSec>

  ));
}



