import {useState, useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import DetailImage from './DetailImage';
import Name from './Name';
import Types from './Types';
import Sizing from './Sizing';
import Abilities from './Abilities';
import BaseStats from './BaseStats';

function PokeList() {
    let location = useLocation();
    const arNum = location.pathname.split("/");
    const pokeNum = arNum[2];
    const [pokemon, setPokemon] = useState()
    const [poke, setPoke] = useState()
    console.log(pokeNum);

    //Get specific pokemon
    useEffect(() => {
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
            <div>
                <DetailImage number={pokemon.id} />
                <Name name={pokemon.name} number={pokemon.id}/>
                <Types types={pokemon.types} />
                <Sizing weight={pokemon.weight * 100} height={pokemon.height * 10} />
                <Abilities abilities={pokemon.abilities} />
                <BaseStats stats={pokemon.stats} />
            </div>
        );
    }
}

export default PokeList;