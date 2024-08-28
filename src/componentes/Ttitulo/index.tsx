import styled from "styled-components";

export const Titulo = styled.h2<{ cor?: string, tamanho?: string}>`
    font-size: ${({ tamanho }) => tamanho || '1em'};
    color: ${({ cor }) => cor || 'black'};
    padding: 0.5em;
`

