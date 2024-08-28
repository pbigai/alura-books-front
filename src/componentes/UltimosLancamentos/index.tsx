import styled from "styled-components"
import { Livros } from "./dadosUltimosLancamentos"
import { Titulo } from "../Ttitulo"
import CardRecomenda from "../CardRecomenda"
import LogoCard from "../../imagens/livro2.png"

const ContainerLancamentos = styled.div`
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const StyleLivros = styled.div`
    display: flex;
    justify-content: center;
    background-color: #cecece;
    height: 50vh;
    width: 100vw;
`

const Imagem = styled.img`
    height: 80%;
    padding: 1em;
    transition: transform 0.3s ease; /* Adiciona uma transição suave para as mudanças */


    &:hover {
        transform: scale(1.05);
        cursor: pointer; /* Muda o cursor para indicar que o elemento é interativo */
        
    }
`

function UltimosLancamentos() {
    return (
        <ContainerLancamentos>
            <Titulo cor={`orange`} tamanho="2em">Últimos Lançamentos</Titulo>
            <StyleLivros>
                {
                    Livros.map(
                        livro => (
                            <Imagem src={livro.src} />
                        )
                    )
                }
            </StyleLivros>
            <CardRecomenda titulo="Talvez você se interesse por..." subtitulo="Angular 11" desc="Construindo uma aplicação integrada com a plataforma." img={LogoCard}/>
        </ContainerLancamentos>
    )
}

export default UltimosLancamentos