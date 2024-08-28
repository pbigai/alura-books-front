const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
import styled from 'styled-components'

const Style_Opcoes_Header = styled.ul `
  display: flex;
`

const Style_Opcoes_item = styled.li `
    min-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    color: black;
    transition: font-size 0.3s ease-in-out, color 0.3s ease; /* Transição para cor e fundo */


    &:hover {
        color: orange;  /* Cor do texto quando em hover */
        font-size: 18px;
    }
  
`


function OpcoesHeader() {
    return(
        <Style_Opcoes_Header>
          {textoOpcoes.map((texto) => (
            <Style_Opcoes_item><p>{texto}</p></Style_Opcoes_item>
          ))}
        </Style_Opcoes_Header>
    )
}

export default OpcoesHeader