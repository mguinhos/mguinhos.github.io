"use client";

import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navbar from "../components/navbar";

const DARK_THEME = createTheme({
    palette: {
        mode: "dark",
    },
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
                    <Box>
                        <Navbar />
                        {children}
                    </Box>
                </body>
            </ThemeProvider>
        </html>
    );
}