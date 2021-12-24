import {useState, useEffect} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import MainImage from "./MainImage";

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

function PokeList() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=151`;
            fetch(baseUrl)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    const pokemonResults = [];
                    for (let i = 0; i < json.results.length; i++) {
                        pokemonResults.push({
                            name: json.results[i].name,
                            url: json.results[i].url
                        });
                    }
                    setPokemon(pokemonResults);
                });
        }
        fetchData()
    }, []);
    
    return(
        <StyledSection>
            <StyledH3>Poke index</StyledH3>
            {pokemon.map((pokemon, index) => (
                <StyledDiv>
                    <MainImage number={index + 1}/>
                    <h6>{pokemon.name}</h6>
                    <Link to={{ pathname: `/pokemon/${index + 1}`, state: { number: index + 1 } }}>
                        <StyledBtn>More</StyledBtn>
                    </Link>
                </StyledDiv>
            ))}
        </StyledSection>
    );
}

export default PokeList;