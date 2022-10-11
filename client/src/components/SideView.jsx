import defaultImg from "../assets/images/default.png";
import {
	Box,
	Typography,
} from '@mui/material'

const SideView = ({ moreDetails }) => {
	return (
		<Box sx={{
			display: 'flex',
            flexDirection: 'column',
			alignItems: 'center',
            justifyContent: 'center',
		}}>
			<img
				src={
					moreDetails.data?.sprites?.other?.dream_world?.front_default ||
					moreDetails.data?.sprites?.other?.["official-artwork"]?.front_default ||
					moreDetails?.data?.sprites?.front_default ||
					defaultImg
				}
				alt="pokemon_img"
				loading="lazy"
				style={{
					width: "250px",
					maxHeight: "210px",
					filter: "drop-shadow(5px 5px 5px hsl(0deg 0% 0% / 0.5))",
				}}
			/>
			<Box sx={{
				padding: "0px 17px 0px 17px",
				border: "1px dashed black",
				marginTop: "30px"
			}}>
				<Typography sx={{textTransform: "capitalize", margin: "6px 0px", textAlign: "left"}}>
					<strong>Name:</strong> <span>{moreDetails.data?.name}</span>
				</Typography>
				<Typography sx={{margin: "6px 0px", textAlign: "left"}}>
					<strong>Species:</strong> {moreDetails.data?.species?.name}
					</Typography>
				<Typography sx={{margin: "6px 0px", textAlign: "left"}}>
					<strong>Types:</strong>{" "}
					{moreDetails.data?.types?.map((singleType, i) => (
						<span key={i} className={"poke-types " + singleType.type?.name}>
							{singleType.type?.name}
						</span>
					))}
				</Typography>
				<Typography sx={{margin: "6px 0px", textAlign: "left"}}>
					<strong>Abilities:</strong>{" "}
					{moreDetails.data?.abilities
						?.map((singleAbility) => singleAbility.ability?.name)
						.join(", ")}
				</Typography>
				<Typography sx={{margin: "6px 0px", textAlign: "left"}}>
					<strong>Moves:</strong>{" "}
					{moreDetails.data?.moves
						?.map((singleMove) => singleMove.move?.name)
						.slice(0, 3)
						.join(", ") || "Unknown"}
				</Typography>
				<Typography sx={{margin: "6px 0px", textAlign: "left"}}>
					<strong>Height:</strong> {Number(moreDetails.data?.height) / 10}m{", "}
					<strong>Weight:</strong> {Number(moreDetails.data?.weight) / 10}kg
				</Typography>
			</Box>
		</Box>
	);
};

export default SideView;
