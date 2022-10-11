import React, { useEffect, useState } from 'react';

import Nav from '../components/Navbar'
import { PokemonList } from '../components/PokemonList';
import { Page } from '../components/Pagination';
import { Loading } from '../components/Loading'
import {
    useGetPokemonByNameQuery,
    useGetAllPokemonQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
} from '../services/pokemonSlice'
import {
    Container,
    Box,

} from '@mui/material'

const Overview = () => {
    const responseInfo = useGetAllPokemonQuery();
	const pokemon = useGetPokemonByNameQuery('bulbasaur')


	// const [data, setData] = useState();
	// const [offset, setOffset] = useState(0);
	// const [isLoading, setIsLoading] = useState(true);
	// const [detailsId, setDetailsId] = useState(Math.ceil(Math.random() * 19).toString());

	// const moreDetails = useGetMoreDetailsQuery(detailsId);
	// const nextPrevData = useGetRangeDataQuery(offset);

	// useEffect(() => {
	// 	responseInfo.isSuccess && setData(responseInfo.data?.results);
	// 	setIsLoading(responseInfo.isLoading);
	// }, [responseInfo]);

	// useEffect(() => {
	// 	nextPrevData.isSuccess && setData(nextPrevData.data?.results);
	// 	setIsLoading(nextPrevData.isLoading);
	// }, [nextPrevData, offset]);

    console.log(responseInfo)
	console.log(pokemon)

	// if (responseInfo.isError) return <h2 className="error-heading">An error occurred, {responseInfo.error}</h2>;


    return (
        <>
            {/* <Nav />
            <Container>
				{isLoading ? <Loading /> : <PokemonList data={data} setDetailsId={setDetailsId} />}
            </Container>
             */}
        </>
    )
}

export default Overview;