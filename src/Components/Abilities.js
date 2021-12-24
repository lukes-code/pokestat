import styled from 'styled-components';

const StyledP = styled.p`
    color: #333;
    font-size: 0.9rem;
    text-transform: Capitalize;
    margin: 5px 10px;
    flex: 1;
    background-color: #fff;
    font-weight: bold;
    border-radius: 999px;
    padding: 2px 10px;
    
`;

const StyledHeadP = styled.p`
    color: #fff;
    font-weight: 500;
`;

const StyledParentDiv = styled.div`
margin-top: 50px;
text-align: center;
`;

const StyledDiv = styled.div`
    display: flex;
    max-width: 600px;
    margin: 15px auto;
`;

function Abilities(props) {
    return(
        <StyledParentDiv>
            <StyledHeadP>Abilities</StyledHeadP>
            <StyledDiv>
            {props.abilities.map(abilities => <StyledP key={abilities.ability.name}> {abilities.ability.name} </StyledP>)}
            </StyledDiv>
        </StyledParentDiv>
    );
}

export default Abilities;