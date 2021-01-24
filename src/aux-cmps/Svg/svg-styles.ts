import styled from 'styled-components';

interface Props {
    color?:string,
    size:string
}
export const SvgStyle = styled.span<Props>`
display: flex;
svg {
    color: ${({color,theme}) => color ? theme[color] : theme.mainSvg};
    font-size: ${({size}) => size};
}

`