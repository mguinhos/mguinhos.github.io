import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider } from "@mui/material";

export default function Terminal({children, sx, ...props}: { children: any, sx?: any, props?: any }) {
    return (
        <Box sx={{paddingBottom: '1em', ...sx}}>
            <Card sx={{borderRadius: '4mm'}} {...props}>
                <Box paddingLeft={'5mm'} paddingTop={1}>
                    <img src='semaphore.svg' style={{objectFit: 'cover'}}></img>
                </Box>
                <Divider/>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </Box>
    );
}