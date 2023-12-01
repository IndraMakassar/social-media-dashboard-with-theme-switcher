import './App.css';
import {Box, Typography} from "@mui/material";
import BigCards from "./components/bigCards";
import SmallCards from "./components/smallCards";

function App() {
    return (
        <>
            <Typography fontWeight={"bold"} fontSize={32}>Social Media Dashboard</Typography>
            <Typography>Total Followers: 23,004</Typography>
            <Box sx={{height: 40}} />
            <BigCards />
            <Box sx={{height: 20}} />
            <Typography fontSize={20}>Overview - Today</Typography>
            <SmallCards />
            <SmallCards />
        </>
    );
}

export default App;
