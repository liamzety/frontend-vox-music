import styled from 'styled-components';

interface Props {
    color?:string,
    size:string
}
export const SvgStyle = styled.div<Props>`
svg {
    color: ${({color,theme}) => color ? color : theme[color]};
    font-size: ${({size}) => size};
}
`