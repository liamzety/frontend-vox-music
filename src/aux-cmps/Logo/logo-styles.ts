import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';

export const LogoStyles = styled.div`
  width: ${remConverter(55)};
  height: ${remConverter(55)};
  background-image: url(${({ theme }) => theme.navbarLogo});
  background-size: cover;
`;
