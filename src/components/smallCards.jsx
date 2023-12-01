import SmallCard from "./smallCard";
import {Stack} from "@mui/material";
import Facebook from  "../images/icon-facebook.svg";
import Twitter from  "../images/icon-twitter.svg";
import Instagram from "../images/icon-instagram.svg";
import Youtube from "../images/icon-youtube.svg";

function smallCards() {
    return (
        <>
        <Stack direction={"row"} justifyContent={"space-between"} spacing={4} sx={{py: 4}}>
            <SmallCard logo={Facebook} title={"Page Views"} number={87} difference={3}/>
            <SmallCard logo={Facebook} title={"Likes"} number={52} difference={2}/>
            <SmallCard logo={Instagram} title={"Likes"} number={5462} difference={2257}/>
            <SmallCard logo={Instagram} title={"Profile Views"} number={"52k"} difference={1375}/>
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"} spacing={4} sx={{py: 4}}>
            <SmallCard logo={Twitter} title={"Retweets"} number={117} difference={303}/>
            <SmallCard logo={Twitter} title={"Likes"} number={507} difference={553}/>
            <SmallCard logo={Youtube} title={"Likes"} number={107} difference={19}/>
            <SmallCard logo={Youtube} title={"Total Views"} number={1407} difference={12}/>
        </Stack>
        </>
    );
}

export default smallCards;