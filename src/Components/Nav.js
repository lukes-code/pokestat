import styled from 'styled-components';
import logo from '../Img/logo.png';

const StyledNav = styled.nav`
    background-color: #fff;
    border-bottom: 5px solid red;
    width: 100%;
`;

const StyledImg = styled.img`
    background-color: #fff;
    text-align: left;
    margin: 20px 60px;
    max-height: 50px;
`;

function Nav() {
    return(
        <StyledNav>
            <StyledImg src={logo} />
        </StyledNav>
    );
}

export default Nav;