import logo from './logo.svg';
import React from 'react';
import './App.css';
import {Box, Container, Link, Typography} from "@mui/material";


function Copyright() {
    return (
        <Typography>
            { 'Copyright ' }
            <Link href="https://github.com/paulinasant">
                {' Git '}
            </Link>
            { new Date().getFullYear() }
        </Typography>);
}

export default function MyApp() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Mi primera App con React y Material UI
                </Typography>
                <Copyright/>

            </Box>
        </Container>
    );
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Practica 5</h1>
                <selectAcceso />
            </header>
        </div>
    );
}