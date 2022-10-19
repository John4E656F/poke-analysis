import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";
import SideView from "../components/SideView";
import Pagination from "../components/Pagination";
import {
	useGetAllPokemonQuery,
	useGetMoreDetailsQuery,
	useGetRangeDataQuery,
} from "../services/pokemonSlice";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import {
    Container,
    Box,

} from '@mui/material'

const Pokedex = () => {
	const responseInfo = useGetAllPokemonQuery();

	const [data, setData] = useState([]);
	const [offset, setOffset] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [detailsId, setDetailsId] = useState(Math.ceil(Math.random() * 19).toString());

	const moreDetails = useGetMoreDetailsQuery(detailsId);
	const nextPrevData = useGetRangeDataQuery(offset);

	useEffect(() => {
		responseInfo.isSuccess && setData(responseInfo.data?.results);
		setIsLoading(responseInfo.isLoading);
	}, [responseInfo]);

	useEffect(() => {
		nextPrevData.isSuccess && setData(nextPrevData.data?.results);
		setIsLoading(nextPrevData.isLoading);
	}, [nextPrevData, offset]);

	const handlePrevious = () => {
		setIsLoading(true);
		setOffset((prev) => offset >= 20 && prev - 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	const handleNext = () => {
		setIsLoading(true);
		setOffset((prev) => offset + 20 <= responseInfo.currentData?.count && prev + 20);
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};

	if (responseInfo.isError) return <h2 className="error-heading">An error occurred, {responseInfo.error.error}</h2>;
// console.log(data)
	return (
        <>
			<Navbar />
		    <Box sx={{
                display: "flex", 
                flexDirection: "row", 
                padding: "16px",
                }}>
                <Box sx={{ 
                    flexBasis: "50%", 
                    display: "flex", 
                    alignItems:"center", 
                    flexDirection:"column",
                    padding: "17px",
                    backgroundColor: "#faffd830",
                    borderRadius: "11px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                    minHeight: "calc(100vh - 96px)",
                    }}>
		    		{isLoading ? <Loading /> : <PokemonList data={data} setDetailsId={setDetailsId} />}
		    		<Pagination
		    			handleNext={handleNext}
		    			handlePrevious={handlePrevious}
		    			offset={offset}
		    			count={responseInfo.data}
		    		/>
		    	</Box>
		    	<Box sx={{ flexBasis: "50%", display: "flex", alignItems: "center", position: "fixed", left: "calc(100vw - 600px)", minHeight: "calc(100vh - 96px)"}}>
		    		<SideView moreDetails={moreDetails} />
		    	</Box>
		    </Box>
        </>
	);
};

export default Pokedex;
