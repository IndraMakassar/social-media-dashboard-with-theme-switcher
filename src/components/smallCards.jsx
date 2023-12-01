import SmallCard from "./smallCard";
import {Stack} from "@mui/material";

function smallCards() {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} spacing={4} sx={{py: 4}}>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
            <SmallCard/>
        </Stack>
    );
}

export default smallCards;