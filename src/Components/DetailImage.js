import styled from 'styled-components';//Style-components

const StyledDiv = styled.div`
    background-color: #fff;
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: centre;
    align-items: centre;
    border-radius: 0px 0px 30px 30px;
`;

const StyledImg = styled.img`
    flex: 1;
    margin: 20px auto;
    max-height: 150px;
    max-width: 150px;
`;

function DetailImage(props) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.number}.png`;
    return(
        <StyledDiv>
            <StyledImg src={url} />
        </StyledDiv>
    );
}

export default DetailImage;