import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById('root'));
const themeLight = createTheme({
    typography: {
        fontFamily: "inter",
    },
    palette: {
        mode: "light",
        facebook: {
            main: 'hsl(208, 92%, 53%)',
        },
        twitter: {
            main: 'hsl(203, 89%, 53%)',
        },
        instagram: {
            main: 'linear-gradient(to right, #fdc468, df4996)',
        },
        youtube: {
            main: 'hsl(348, 97%, 39%)',
        },
        toggle: {
            main: 'hsl(230, 22%, 74%)'
        },
        // green
        success: {
            main: 'hsl(163, 72%, 41%)',
        },
        // red
        error: {
            main: 'hsl(356, 69%, 56%)',
        },
        text: {
            primary: 'hsl(228, 12%, 44%)',
            secondary: 'hsl(230, 17%, 14%)',
        },
        background: {
            default: 'hsl(0, 0%, 100%)',
            paperTop: 'hsl(225, 100%, 98%)',
            paper: 'hsl(227, 47%, 96%)',
        },
    },
});

const themeDark = createTheme({
    typography: {
        fontFamily: "inter",
    },
    palette: {
        mode: "dark",
        facebook: {
            main: 'hsl(208, 92%, 53%)',
        },
        twitter: {
            main: 'hsl(203, 89%, 53%)',
        },
        instagram: {
            main: 'linear-gradient(to right, #fdc468, df4996)',
        },
        youtube: {
            main: 'hsl(348, 97%, 39%)',
        },
        toggle: {
            main: ' linear-gradient(to right, hsl(210, 78%, 56%) to hsl(146, 68%, 55%))'
        },
        // green
        success: {
            main: 'hsl(163, 72%, 41%)',
        },
        // red
        error: {
            main: 'hsl(356, 69%, 56%)',
        },
        text: {
            primary: 'hsl(228, 34%, 66%)',
            secondary: 'hsl(0, 0%, 100%)',
        },
        background: {
            default: 'hsl(230, 17%, 14%)',
            paperTop: 'hsl(232, 19%, 15%)',
            paper: 'hsl(228, 28%, 20%)',
        },
    },
})

export function Main() {
    const [darkMode, setDarkMode] = useState(false)

    function handleChangeMode() {
        setDarkMode(!darkMode)
    }

    return (
        <React.StrictMode>
            <ThemeProvider theme={darkMode ? themeDark : themeLight}>
                <App onChangeMode={handleChangeMode}/>
            </ThemeProvider>
        </React.StrictMode>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
