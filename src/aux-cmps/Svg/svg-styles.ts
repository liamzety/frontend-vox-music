import styled from 'styled-components';

interface Props {
    color?:string,
    size:string
}
export const SvgStyle = styled.span<Props>`
svg {
    color: ${({color,theme}) => color ? color : theme[color]};
    font-size: ${({size}) => size};
}
`