import React from 'react';
import styled from 'styled-components';
import { Titulo } from '../Ttitulo';


interface CardRecomendaProps {
    titulo: string;
    subtitulo: string;
    desc: string;
    img: string;
}

const Card = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    padding: 1em;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`

const CardBotoes = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    margin: 0% auto;
    gap: 1em;
`

const Botao = styled.button `
    background-color: orange;
    font-size: 1em;
    border: 0;
    border-radius : 10px;
    padding: 1em;
    color: white;
    transition: transform 0.3s ease; /* Adiciona uma transição suave para as mudanças */


    &:hover {
        transform: scale(1.15);
        cursor: pointer; /* Muda o cursor para indicar que o elemento é interativo */
        
    }
`

const CampoBorder = styled.div `
    background-color: white;
    border-radius: 20px;
    transition: transform 0.3s ease; /* Adiciona uma transição suave para as mudanças */


    &:hover {
        transform: scale(1.03);        
    }
`

const Imagem = styled.img `
    height: 40%;
    width: 40%;
`

const CardRecomenda: React.FC<CardRecomendaProps> = ({ titulo, subtitulo, desc, img }) => {
    return (
        <Card>
            <CampoBorder>
            <div>
                <Titulo cor='orange' tamanho='2em' >{titulo}.</Titulo>
                <Titulo tamanho='1.5em'>{subtitulo}</Titulo>
                <p>{desc}</p>
            </div>
            <CardBotoes>
                <Imagem src={img} alt={titulo}/>
                <Botao>Saiba Mais</Botao>
            </CardBotoes>
            </CampoBorder>
        </Card>
    );
}

export default CardRecomenda