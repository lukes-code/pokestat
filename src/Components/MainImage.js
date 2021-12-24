import styled from 'styled-components';

const StyledImg = styled.img`
max-height: 100px;
`;

function MainImage(props) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.number}.png`;
    return(
        <StyledImg src={url} />
    );
}

export default MainImage;