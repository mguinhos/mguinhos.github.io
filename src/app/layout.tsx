"use client";

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './globals.css';

import Navbar from "../components/navbar";
import Footer from "@/components/footer";

const DARK_THEME = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: 'pixelify_sans'
    }
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <ThemeProvider theme={DARK_THEME}>
                <CssBaseline />
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </head>
                <body>
                    <Box style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                        <Navbar/>
                        {children}
                        <Footer/>
                    </Box>
                </body>
            </ThemeProvider>
        </html>
    );
}