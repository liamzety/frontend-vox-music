import React from 'react';
import { useObserver } from 'mobx-react';
import { MainSection, Title } from '../assets/style/components/banner';

export function Banner() {
  return useObserver(() => (
    <MainSection>
      <Title>Banner</Title>
    </MainSection>
  ));
}
