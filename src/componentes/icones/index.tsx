import perfil  from '../../imagens/perfil.svg'
import sacola  from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li `
    margin-right: 20px;
`

const ListaIcone = styled.ul `
    display: flex;
    align-items: center;
  
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <ListaIcone>
          {icones.map((icone) => (
            <Icone><img src={icone} alt="icone" /></Icone>
          ))}
        </ListaIcone>
    )
}
export default IconesHeader