import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Facebook from "../images/icon-facebook.svg";
import Up from "../images/icon-up.svg";

function bigCard() {
    return (
        <Card variant='outlined' sx={{p: 0, flexGrow: 1}}>
            {/*<CardContent sx={{p: 0}>*/}
                <Box component={"div"} sx={{background: 'hsl(208, 92%, 53%)', height: '4px'}}/>
                <Stack direction="column" alignItems="center" sx={{py: 2}}>
                    <Stack direction="row" justifyContent='center' alignItems='center' spacing={1}>
                        <img src={Facebook} alt="Facebook Logo"/>
                    <Typography>@Nathanf</Typography>
                    </Stack>
                <Stack>
                    <Typography fontWeight="bold" fontSize={60}>1987</Typography>
                    <Typography textTransform={"uppercase"} letterSpacing={5}>followers</Typography>
                </Stack>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                        <img src={Up} alt="up"/>
                    <Typography >12 Today</Typography>
                    </Stack>
                </Stack>
            {/*</CardContent>*/}
        </Card>
    );
}

export default bigCard;