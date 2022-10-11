import {
    Button,
    Stack
} from '@mui/material'

const Page = ({ handleNext, handlePrevious, offset, count }) => {
	
	return (
        <Stack sx={{ display: "flex", marginTop: "20px", flexDirection: "row"}}>
            <Button onClick={handlePrevious} disable={offset <= 0}>
                {"<"} Previous
            </Button>
            <Button onClick={handleNext} disable={offset >= count?.count}>
                Next {">"}
            </Button>
        </Stack>
        

	);
};

export default Page ;

