import BigCard from "./bigCard";
import {Stack} from "@mui/material";
import Facebook from  "../images/icon-facebook.svg";
import Twitter from  "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Youtube from "../images/icon-youtube.svg";

function bigCards() {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} spacing={4}>
            <BigCard userName={"@nathanf"} followers={1987} difference={12} logo={Facebook} color={"facebook.main"}/>
            <BigCard userName={"@nathanf"} followers={1044} difference={99} logo={Twitter} color={'twitter.main'}/>
            <BigCard userName={"@realnathanf"} followers={"11K"} difference={1099} logo={Instagram} color={"instagram.main"}/>
            <BigCard userName={"Nathan F."} followers={8239} difference={144} logo={Youtube} color={"youtube.main"}/>
        </Stack>
    );
}

export default bigCards;