import styled from 'styled-components';

export const InstallPopupContainer = styled.div`
        position: fixed;
        line-height: 1.5;
        top: 0;
        left: 0;
        width: 100%;
        background-color: rgb(226, 60, 143);
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.137);
        padding: 10px 20vw;
        color: #f1f1f1;

        & * {
                margin: 0;
        }
        @media (max-width: 1080px) {
                top: auto;
                bottom: 0;
            }
  `;
export const InstallPopupInnerContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: -25px;
   
  `;
export const InstallPopupWordContainer = styled.div`
        margin-bottom: 25px;      
  `;
export const InstallPopupBtn = styled.button`
        display: flex;
        align-items: center;
        font-size: 1em;
        height: 40px;
        padding: 0 15px;
        color: #f1f1f1;
        background-color: rgb(226, 60, 143);
        box-shadow: 5px 5px 10px rgb(204, 64, 134),
          -5px -5px 10px rgb(227, 84, 156);
        border: none;
        border-radius: 35px;
        font-weight: 700;
        margin-bottom: 25px;
  `;
export const InstallPopupCloseBtn = styled.button`
         position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        color: #f5f5f59f;
        font-size: 1.5em;
  `;