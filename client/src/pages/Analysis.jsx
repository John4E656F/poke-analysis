import { useEffect, useState } from "react";
import axios from 'axios';
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import Chart from '../components/TypeChart'
import {
	useGetAllPokemonQuery,
    useGetAllPokemonDataQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
    useGetPokemonByIdQuery,
} from "../services/pokemonSlice";

const Analysis = () => {
    const responseInfo = useGetAllPokemonDataQuery('1154');
    const [data, setData] = useState([]);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState({
        Normal: 0,
        Fire: 0,
        Water: 0,
        Grass: 0,
        Electric: 0,
        Ice: 0,
        Fighting: 0,
        Poison: 0,
        Ground: 0,
        Flying: 0,
        Psychic: 0,
        Bug: 0,
        Rock: 0,
        Ghost: 0,
        Dark: 0,
        Dragon: 0,
        Steel: 0,
        Fairy: 0,
    });
	const [isLoading, setIsLoading] = useState(true);
	const [detailsId, setDetailsId] = useState(Math.ceil(Math.random() * 19).toString());

    const mapPokemonType = (pokeType) => {
        // const { name, types } = pokemon.data;
        switch (pokeType) {
            case "normal":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Normal: pokemonType.Normal+1,
                }));
                break;
            case "fire":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Fire: pokemonType.Fire+1,
                }));
                break;
            case "water":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Water: pokemonType.Water + 1,
                }));
                break;
            case "grass":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Grass: pokemonType.Grass + 1,
                }));
                break;
            case "electric":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Electric: pokemonType.Electric + 1,
                }));
                break;
            case "ice":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Ice: pokemonType.Ice + 1,
                }));
                break;
            case "fighting":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Fighting: pokemonType.Fighting + 1,
                }));
                break;
            case "poison":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Poison: pokemonType.Poison + 1,
                }));
                break;
            case "ground":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Ground: pokemonType.Ground + 1,
                }));
                break;
            case "flying":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Flying: pokemonType.Flying + 1,
                }));
                break;
            case "psychic":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Psychic: pokemonType.Psychic + 1,
                }));
                break;
            case "bug":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Bug: pokemonType.Bug + 1,
                }));
                break;
            case "rock":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Rock: pokemonType.Rock + 1,
                }));
                break;
            case "ghost":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Ghost: pokemonType.Ghost + 1,
                }));
                break;
            case "dark":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Dark: pokemonType.Dark + 1,
                }));
                break;
            case "dragon":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Dragon: pokemonType.Dragon + 1,
                }));
                break;
            case "steel":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Steel: pokemonType.Steel + 1,
                }));
                break;
            case "fairy":
                setPokemonType( pokemonType => ({
                    ...pokemonType,
                    Fairy: pokemonType.Fairy + 1,
                }));
                break;
            default:
                break;
        }
    }

    // console.log(responseInfo)
    // console.log(responseInfo.data.results.)
    useEffect(() => {

        async function getData() {
            try {
                // let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`)
                // console.log(pokemon.data.types)
                // console.log(pokemon.data.types[0].type.name)
                for (let i = 1; i <= 1142; i++) {
                    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
                    // mapPokemonType(pokemon)
                    // console.log(pokemon)
                    for (let j = 0; j < pokemon.data.types.length; j++) {
                        let pokeType = pokemon.data.types[j].type.name;
                        mapPokemonType(pokeType)
                        console.log(pokemonType)
                    }
                    
                } 
            } catch (error) {
                console.log(error)
            }
        } 
        getData();
    }, [])
    return(
        <>
            <Navbar />
            <Chart data={pokemonType} setDetailsId={setDetailsId}/>
        </>
    )
}

export default Analysis