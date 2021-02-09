import styled from 'styled-components';

interface Props {
    darkenBg:boolean;
    index:string;
}
export const ScreenWrapperStyle = styled.div<Props>`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: ${({index}) => index};
background-color: ${({darkenBg}) => darkenBg && '#000000ad'} ;
`