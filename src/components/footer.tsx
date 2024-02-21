import { Box, Paper, Divider, Typography } from "@mui/material";

export default function Footer(props: any) {
    return (
        <Paper sx={{ marginTop: 'auto' }}>
            <Box padding={1}>
                <Typography>2023 - Marcel Guinhos de Menezes</Typography>
            </Box>
        </Paper>
    );
}