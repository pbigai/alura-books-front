import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos'
import { Titulo } from '../componentes/Ttitulo'

const AppContainer = styled.div`
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`

const ContainerResposta = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    text-align: center;
`

const Resultado = styled.p`
    margin: 0% auto;
    background-color: orange;
    width: min-content;
    padding: 1em;
    border-radius: 20px;
    font-size: 1.3em;
    color: white;
    font-weight: 300;
    cursor: pointer;
    transition: transform  0.3s ease;
    
    &:hover {
        transform: scale(1.05); /* Aumenta o tamanho do item ligeiramente no hover */
    }
`

const Resultado_lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`


interface Favorito {
  nome: string;
  id: string;
}

function Favoritos() {
  const [favoritos, setFavoritos] = useState<Favorito[]>([])

  async function fetchFavoritos() {
    const favoritosdaAPI = await getFavoritos()
    setFavoritos(favoritosdaAPI)
  }

  async function deleteFavoritoID(id: string) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro com o id: ${id} foi deletado!`)
}

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>
      <ContainerResposta>
        <Titulo tamanho='2em' cor='orange'>Aqui estão seus livros favoritos!</Titulo>
        <Resultado_lista>
        {favoritos.map(favorito => (
          <Resultado onClick={() => deleteFavoritoID(favorito.id as unknown as string)}>{favorito.nome}</Resultado>
        )
        )}
        </Resultado_lista>
      </ContainerResposta>
    </AppContainer>
  )
}

export default Favoritos
