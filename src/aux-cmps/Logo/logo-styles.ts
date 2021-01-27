import styled from 'styled-components';

export const LogoStyles = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${({ theme }) => theme.navbarLogo});
  background-size: cover;
`;
