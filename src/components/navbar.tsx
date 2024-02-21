"use client";

import { AppBar, Box, Button, Grid, Link, Toolbar, Typography } from "@mui/material";

export default function Navbar({ children, ...props}: any) {
    return (
        <Box padding={1}>
            <AppBar {...props} position="static" color="primary" elevation={0} sx={{ borderRadius: '1mm', backgroundColor: '#00000022'}}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Marcel Guinhos</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
