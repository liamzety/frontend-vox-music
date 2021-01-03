import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadTemplates, addTemplate, removeTemplate, updateTemplate } from "../store/actions/templateActions";
// Cmps
import { TemplateAdd } from './TemplateAdd';
import { TemplateList } from './TemplateList';
// Styles
import styled from 'styled-components';

const MainSec = styled.section`
background-color:${({ theme }) => theme.mainSec};
color: ${({ theme }) => theme.mainSecTxt};
`;
const Title = styled.h1`
font-size: 1.5em;
`;

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
    <MainSec>
      <Title>Template</Title>
      <TemplateList
        templates={templates}
        onUpdateTemplate={onUpdateTemplate}
        onRemoveTemplate={onRemoveTemplate} />
      <TemplateAdd onAddTemplate={onAddTemplate} />
    </MainSec>
  );
}



