import {Box, Card, CardContent, Stack, Typography} from "@mui/material";
import Up from "../images/icon-up.svg";

function bigCard({logo, userName, followers, isUp, difference, color}) {
    return (
        <Card variant='outlined' sx={{p: 0, flexGrow: 1}}>
            {/*<CardContent sx={{p: 0}>*/}
                <Box component={"div"} sx={{bgcolor: color, height: '4px'}}/>
                <Stack direction="column" alignItems="center" sx={{py: 2}}>
                    <Stack direction="row" justifyContent='center' alignItems='center' spacing={1}>
                        <img src={logo} alt="Facebook Logo"/>
                    <Typography>{userName}</Typography>
                    </Stack>
                <Stack>
                    <Typography fontWeight="bold" fontSize={60} color={'textSecondary'}>{followers}</Typography>
                    <Typography textTransform={"uppercase"} letterSpacing={5}>followers</Typography>
                </Stack>
                    <Stack direction='row' justifyContent='center' alignItems='center' spacing={1}>
                        <img src={Up} alt="up"/>
                    <Typography >{difference} Today</Typography>
                    </Stack>
                </Stack>
            {/*</CardContent>*/}
        </Card>
    );
}

export default bigCard;