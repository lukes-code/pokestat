import styled from 'styled-components';

const StyledP = styled.p`
    color: #fff;
    font-size: 2rem;
    text-transform: Capitalize;
    font-weight: bold;
    padding: 0px;
    margin: 15px auto;
    text-align: center;
`;

function Name(props) {
    return(
        <StyledP>{props.name}</StyledP>
    );
}

export default Name;