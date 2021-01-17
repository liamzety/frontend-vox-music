import styled from 'styled-components';

export const MainSection = styled.section`
background-color: ${({ theme }) => theme.mainSection};
color: ${({ theme }) => theme.mainSectionTxt};
`;
export const Title = styled.h1`
color: ${({ theme }) => theme.mainSectionTitle};
`;