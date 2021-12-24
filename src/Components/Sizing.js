import styled from 'styled-components';

const StyledP = styled.p`
    color: #fff;
    font-size: 1rem;
    margin: 5px;
    font-weight: bold;
    flex: 1;
    text-align: center;
`;

const StyledSpan = styled.span`
    font-weight: 100;
    font-size: 0.8rem;
`;

const StyledDiv = styled.div`
    display: flex;
    width: 200px;
    margin: 15px auto;
`;

function Sizing(props) {
    return(
        <StyledDiv>
            <StyledP>{props.weight}g <br></br><StyledSpan>Weight</StyledSpan></StyledP>
            <StyledP>{props.height}cm<br></br><StyledSpan>Height</StyledSpan></StyledP>
        </StyledDiv>
    );
}

export default Sizing;