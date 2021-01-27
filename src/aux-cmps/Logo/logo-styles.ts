import styled from 'styled-components';

interface Props {
  isTopPage?: boolean;
}

export const LogoStyles = styled.div<Props>`
  width: 50px;
  height: 50px;
  background-image: url(${({ isTopPage, theme }) =>
    isTopPage ? theme.navbarLogoTop : theme.navbarLogo});
  background-size: cover;
`;
