import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Facebook from "../images/icon-facebook.svg";
import Up from "../images/icon-up.svg";
function smallCard() {
    return (
        <Card sx={{flexGrow: 1}}>
            <CardContent sx={{px: 4}}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems='center'>
                    <Typography>Page Views</Typography>
                    <img src={Facebook} alt={"logo facebook"}/>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography fontWeight={"bold"} fontSize={32}>87</Typography>
                    <Stack direction={"row"} alignItems='center' justifyContent={"flex-end"}>
                        <img src={Up} alt="up" />
                            <Typography>3%</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default smallCard;