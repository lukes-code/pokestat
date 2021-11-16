import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

class PokeList extends React.Component{

    constructor(props) {
        super(props);
            this.state = {
                pokemon: []
            }
        }


    //Get list of 151 Pokemon from API
    componentDidMount = (async) => {
        const baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151';
        fetch(baseUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                const pokemon = [];
                for (let i = 0; i < json.results.length; i++) {
                    pokemon.push({
                        name: json.results[i].name,
                        url: json.results[i].url
                    });
                    
                }
                console.log(pokemon + ' is poke');
            
                this.setState({ pokemon });
            });
    }

    render() {

        //Style-components
        const StyledDiv = styled.div`
            flex: 1;
            border: 2px solid #fff;
            margin: 10px auto;
            border-radius: 5px;
            max-width: 100px;
            min-width: 100px;
            text-align: center;
            padding: 10px;
            color: #fff;
            font-size: 1.5rem;
            text-transform: Capitalize;
        `;

        const StyledSection = styled.section`
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        `;

        const StyledH3 = styled.h3`
            width: 100%;
            color: #fff;
            font-weight: bold;
            margin: 50px;
            text-align: center;
        `;

        const StyledBtn = styled.button`
            background-color: #fff;
            color: #333;
            border: none;
            font-size: 1rem;
            padding: 5px 20px;
            border-radius: 3px;
            cursor: pointer;
        `;

        if (this.state.pokemon.length === 0){ 
            return(
                <p>Waiting for list</p>
            );
        } else {
            return(
                <StyledSection>
                    <StyledH3>Poke index</StyledH3>
                    {this.state.pokemon.map((pokemon, index) => (
                        <StyledDiv>
                            <h6>{pokemon.name}</h6>
                            <Link to={{ pathname: `/pokemon/${index + 1}`, state: { number: index + 1 } }}>
                                <StyledBtn>More</StyledBtn>
                            </Link>
                        </StyledDiv>
                    ))}
                </StyledSection>
            );
        }
    }
}

export default PokeList;