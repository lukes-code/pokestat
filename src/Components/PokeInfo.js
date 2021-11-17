import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from "react-router-dom";
import DetailImage from './DetailImage';
import Name from './Name';
import Types from './Types';
import Sizing from './Sizing';
import Abilities from './Abilities';
import BaseStats from './BaseStats';

//Style-components
const StyledDiv = styled.div`
`;

function PokeList() {
    let location = useLocation();
    const arNum = location.pathname.split("/");
    const pokeNum = arNum[2];
    const [pokemon, setPokemon] = React.useState()
    const [poke, setPoke] = React.useState()
    console.log(pokeNum);

    //Get specific pokemon
    React.useEffect(() => {
        const fetchData = async () => {
            const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokeNum}`;
            fetch(baseUrl)
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    setPokemon(json);
                    setPoke(true);
                });
        }
        fetchData()
    }, []);

    

    if (!poke){
        return(
            <div>
            </div>
        );
    } else {
        return(
            <StyledDiv>
                <DetailImage number={pokemon.id} />
                <Name name={pokemon.name} number={pokemon.id}/>
                <Types types={pokemon.types} />
                <Sizing weight={pokemon.weight * 100} height={pokemon.height * 10} />
                <Abilities abilities={pokemon.abilities} />
                <BaseStats stats={pokemon.stats} />
            </StyledDiv>
        );
    }
}

export default PokeList;