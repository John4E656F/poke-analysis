import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState ={
    normal: 0,
    fire: 0,
    water: 0,
    grass: 0,
    electric: 0,
    ice: 0,
    fighting: 0,
    poison: 0,
    ground: 0,
    flying: 0,
    psychic: 0,
    bug: 0,
    rock: 0,
    ghost: 0,
    dark: 0,
    dragon: 0,
    steel: 0,
    fairy: 0,
}

export const pokemonCounterSlice = createSlice({
    name: 'counter',
    initialState: {
        normal: (state) => {
            state.normal += 1
        },
        fire: (state) => {
            state.fire += 1
        },
        water: (state) => {
            state.water += 1
        },
        grass: (state) => {
            state.grass += 1
        },
        electric: (state) => {
            state.electric += 1
        },
        ice: (state) => {
            state.ice += 1
        },
        fighting: (state) => {
            state.fighter += 1
        },
        poison: (state) => {
            state.poison += 1
        },
        ground: (state) => {
            state.ground += 1
        },
        flying: (state) => {
            state.flying += 1
        },
        psychic: (state) => {
            state.psychic += 1
        },
        bug: (state) => {
            state.bug += 1
        },
        rock: (state) => {
            state.rock += 1
        },
        ghost: (state) => {
            state.ghost += 1
        },
        dark: (state) => {
            state.dark += 1
        },
        dragon: (state) => {
            state.dragon += 1
        },
        steel: (state) => {
            state.steel += 1
        },
        fairy: (state) => {
            state.fairy += 1
        },
    },
})

export const {
    normal,
    fire,
    water,
    grass,
    electric,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dark,
    dragon,
    steel,
    fairy,
} = pokemonCounterSlice.actions

export default pokemonCounterSlice.reducer