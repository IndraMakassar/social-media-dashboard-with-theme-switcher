import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Facebook from "../images/icon-facebook.svg";
import Up from "../images/icon-up.svg";
function smallCard({title, logo, number, difference}) {
    return (
        <Card sx={{flexGrow: 1}}>
            <CardContent sx={{px: 4}}>
                <Stack direction={"row"} justifyContent={"space-between"} alignItems='center'>
                    <Typography>{title}</Typography>
                    <img src={logo} alt={"logo facebook"}/>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography fontWeight={"bold"} fontSize={32} color={'textSecondary'}>{number}</Typography>
                    <Stack direction={"row"} alignItems='center' justifyContent={"flex-end"}>
                        <img src={Up} alt="up" />
                            <Typography>{difference}%</Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default smallCard;