import IconesHeader from "../icones";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header `
    display: flex;
    justify-content: space-between;
    background-color: white;
  `


function Header() {
    return (
        <HeaderContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header