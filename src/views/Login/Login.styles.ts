import styled from 'styled-components';
export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;

  form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 80%;
    width: 80%;
    max-width: 800px;
    p.h2 {
      align-self: flex-start;
    }
    p.a {
      margin-left: auto;
    }

    input {
      width: 100%;
      max-width: inherit;
    }
  }
`;
export const ActionsContainer = styled.div`
  > * {
    margin-bottom: 10px;
  }
`;
