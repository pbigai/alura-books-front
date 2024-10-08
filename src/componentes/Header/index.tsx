import IconesHeader from "../icones";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: white;
  `


function Header() {
    return (
        <HeaderContainer>
            <Link to="/"> <Logo /> </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header
