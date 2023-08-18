"use client";

import { AppBar, Button, Grid, Link, Toolbar, Typography } from "@mui/material";

export default function Navbar({ children, ...props}: any) {
    return (
        <AppBar {...props} position="static" color="primary">
            <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>Marcel Guinhos</Typography>
            </Toolbar>
        </AppBar>
    );
}
