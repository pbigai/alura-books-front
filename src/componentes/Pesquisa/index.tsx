import styled from "styled-components"
import Input from "../Input"
import { useEffect, useState } from "react"
import { Titulo } from "../Ttitulo";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

interface Livro {
    nome: string;
    id: number;
    src: string;
}

const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    width: 100%;    
`


const SubTitulo = styled.h3`
    font-size: 2em;
    font-weight: 500;
    margin-bottom: 40px;
`

const ContainerLivro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b57600;
    width: min-content;
    margin: 0 auto; /* Adiciona margens automáticas para centralizar */
    margin-top: 1em;
    padding: 1em;
    gap: 1em;
    border-radius: 20px;
    transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s ease; /* Adiciona uma transição suave para as mudanças */
    
    &:hover {
        background-color: orange;
        transform: scale(1.15);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Adiciona uma sombra quando o mouse está sobre o contêiner */
        cursor: pointer; /* Muda o cursor para indicar que o elemento é interativo */
    }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState<Livro[]>([]);
    const [livros, setlivros] = useState<Livro[]>([]);

    useEffect(() => {
        fetchLivros()
    }, [])

    async function fetchLivros() {
        const LivrosAPI = await getLivros();
        setlivros(LivrosAPI)
    }

    async function insertFavorito(id: string) {
        await postFavorito(id)
        alert(`Livro com o id: ${id} foi inserido aos favoritos!`)
    }

    return (
        <SearchContainer>
            <Titulo cor="white" tamanho="3em">Já Sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input placeholder="Escreva sua próxima leitura" onBlur={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }} />
            {livrosPesquisados.map(livro => (
                <ContainerLivro onClick={() => insertFavorito(livro.id as unknown as string)}>
                    <Titulo cor="white" tamanho="1.5em">{livro.nome}</Titulo>
                    <img src={livro.src} />
                </ContainerLivro>
            ))}
        </SearchContainer>
    )
}

export default Pesquisa
