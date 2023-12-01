import logo from './logo.svg';
import './App.css';
import {Stack} from "@mui/material";
import BigCard from "./components/bigCard";

function App() {
  return (
      <Stack direction={"row"} justifyContent={"space-between"} spacing={4}>
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      </Stack>
  );
}

export default App;
