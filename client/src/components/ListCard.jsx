import { useGetMoreDetailsQuery } from "../services/pokemonSlice";
import {
	Box,
	Typography,
} from '@mui/material'

const SinglePokemon = ({ pokemon, setDetailsId }) => {
	const moreInfo = useGetMoreDetailsQuery(pokemon.name);

	return (
		<Box
			onClick={() => {
				setDetailsId(pokemon.name);
				window.innerWidth <= 500 &&
					window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
			}}
			sx={{
				cursor: "pointer",
				backgroundColor: "#f6ffea",
				width: "250px",
				borderRadius: "11px",
				textAlign: "center",
				padding: "10px",
				boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
			}}
		>
			<img
				src={
					moreInfo.data?.sprites?.front_default ||
					moreInfo.data?.sprites?.other?.["official-artwork"]?.front_default ||
					moreInfo?.data?.sprites?.front_default
				}
				alt="indicator-img"
				loading="lazy"
				style={{width: "100px"}}
			/>
			<Typography sx={{
				textTransform: "capitalize",
			}}>{pokemon.name}</Typography>
		</Box>
	);
};

export default SinglePokemon;
