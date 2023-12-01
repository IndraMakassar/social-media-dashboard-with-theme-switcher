import './App.css';
import {Box, Stack, Switch, Typography} from "@mui/material";
import BigCards from "./components/bigCards";
import SmallCards from "./components/smallCards";

function App({onChangeMode}) {
    return (
        <>
            {/*<Box sx={{bgcolor: 'background.paperTop', position: "absolute", width: '100vw', height: 100, mx: -20}}/>*/}
            <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography fontWeight={"bold"} fontSize={32} color={'textSecondary'}>Social Media Dashboard</Typography>
            <Switch defaultChecked onChange={() => onChangeMode()} />
            </Stack>
            <Typography color={'textPrimary'}>Total Followers: 23,004</Typography>
            <Box sx={{height: 40}} />
            <BigCards />
            <Box sx={{height: 20}} />
            <Typography fontSize={20}>Overview - Today</Typography>
            <SmallCards />
        </>
    );
}

export default App;
