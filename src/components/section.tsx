import { Box, BoxProps, Divider, Typography } from "@mui/material";

type SectionProps = {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
} & BoxProps;

export default function Section({ children, subtitle, title='title', ...props }: SectionProps) {
    return (
        <>
            <Box paddingTop={1} {...props}>
                <Box padding={1}>
                    <Typography variant="h4">{title}</Typography>
                    {subtitle? <Typography variant="body1">{subtitle}</Typography> : null}
                </Box>
                <Box padding={1}>
                    <Divider/>
                </Box>
            </Box>
            {children}
        </>
    );
}