// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/pokemon' }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      })
    }),
    getAllPokemonData: builder.query({
      query: (limit) => ({
        url: `?limit=${limit}`,
        method: "GET",
      })
    }),
    getMoreDetails: builder.query({
      query: (url) => ({
        url: url,
        method: "GET",
      })
    }),
    getRangeData: builder.query({
      query: (offset) => ({
        url: `?offset=${offset}&limit=20`,
        method: "GET",
      })
    }),
    getSinglePokemon: builder.query({
      query: (name) => ({
        url: name,
        method: "GET",
      }),
    }),
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`,
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetAllPokemonQuery,
  useGetAllPokemonDataQuery,
  useGetMoreDetailsQuery,
  useGetRangeDataQuery,
  useGetSinglePokemonQuery,
  useGetPokemonByNameQuery,
  useGetPokemonByIdQuery
} = pokemonApi

