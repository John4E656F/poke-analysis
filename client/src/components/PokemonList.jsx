import SinglePokemon from "./ListCard";
import {
	Box,
} from '@mui/material'

const PokemonList = ({ data, setDetailsId }) => {
	return (
		<Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, calc(50% - 8px))", gap: "16px" }}>
			{data.map((pokemon, i) => (
				<SinglePokemon key={i} pokemon={pokemon} setDetailsId={setDetailsId} />
			))}
		</Box>
	);
};

export default PokemonList ;