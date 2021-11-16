import React from 'react';
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

class Name extends React.Component{
    render() {
        return(
            <StyledP>{this.props.name}</StyledP>
        );
    }
}

export default Name;