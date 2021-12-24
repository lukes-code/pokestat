import styled from 'styled-components';

const StyledP = styled.p`
    color: #333;
    font-size: 0.9rem;
    text-transform: Capitalize;
    font-weight: bold;
    padding: 0px;
    margin: 5px;
    flex: 1;
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 999px;
    text-align: center;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 200px;
    margin: 15px auto;
`;

function Types(props) {
    return(
        <StyledDiv>{props.types.map(types => <StyledP key={types.type.name}> {types.type.name} </StyledP>)}</StyledDiv>
    );
}

export default Types;