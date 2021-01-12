import React from 'react';
import { useObserver } from 'mobx-react';
// Styles
import styled from 'styled-components';


const MainSection = styled.section`
background-color:${({ theme }) => theme.mainSection};
color: ${({ theme }) => theme.mainSectionTxt};
`;
const Title = styled.h1`
color: ${({ theme }) => theme.mainSectionTitle};
`;

export function Banner() {
  return useObserver(() => (
    <MainSection>
      <Title>Banner</Title>
    </MainSection>
  ));
}



