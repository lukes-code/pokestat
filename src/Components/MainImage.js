import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
`;

class MainImage extends React.Component {
    render() {
        const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.number}.png`;
        return(
            <StyledImg src={url} />
        );
    }
}

export default MainImage;