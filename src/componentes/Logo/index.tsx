import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoComponent = styled.div `
  padding: 0px 1em 0px 1em;
    display: flex;
    font-size: 30px;
    margin: 0;
`

const LogoImg = styled.img `
  margin-right: 0.5em;
`

function Logo() {
    return (
        <LogoComponent>
          <LogoImg  src={logo} alt="logo-alura-books"/>
          <p><strong>Alura</strong> Books</p>
        </LogoComponent>
    )
}

export default Logo