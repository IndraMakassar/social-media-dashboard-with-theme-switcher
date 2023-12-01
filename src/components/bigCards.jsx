import BigCard from "./bigCard";
import {Stack} from "@mui/material";

function bigCards() {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} spacing={4}>
            <BigCard/>
            <BigCard/>
            <BigCard/>
            <BigCard/>
        </Stack>
    );
}

export default bigCards;