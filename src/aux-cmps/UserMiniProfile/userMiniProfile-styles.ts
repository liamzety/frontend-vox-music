import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { remConverter } from '../../assets/style/main';
import unknownUserPng from '../../assets/img/unknown-user.png';

export const UserMiniProfileStyles = styled.div`
& , > img {
    height: ${remConverter(50)};
    width: ${remConverter(50)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: ${GlobalVars.blackMain};
    color: ${GlobalVars.yellowMain};
    border: 2px solid ${GlobalVars.yellowMain};

}


`
export const UnknownUser = styled.div`
background-image: url(${unknownUserPng});
width: ${remConverter(50)};
height: ${remConverter(50)};
background-position: center;
background-size: contain;

`