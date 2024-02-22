import { Box, BoxProps, CardMedia } from "@mui/material";

export function HeartSvg({...props}: any): JSX.Element {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fill="#cccccc"
                opacity={0.125}
                d="M 5.0002121,1.999877 C 4.448,1.999625 4.0000753,2.447084 3.9997563,2.999299 V 3.999755 H 3.0003341 C 2.4481223,3.999503 2.0001974,4.446962 1.9998784,4.999177 v 1.000456 1.999877 2.000395 1.999878 1.973523 0.02636 0.974101 c 3.191e-4,0.552212 0.4482435,0.999674 1.0004557,0.999422 h 0.9994222 v 0.02636 1.000456 c 3.191e-4,0.552211 0.4482433,0.999158 1.0004558,0.998905 h 0.9994222 v 0.001 h 5.167e-4 v 0.999939 c 3.191e-4,0.552211 0.4482433,0.999675 1.0004558,0.999422 H 8.000029 v 5.17e-4 h -5.168e-4 v 1.000455 c 3.191e-4,0.552214 0.4482435,0.999675 1.0004557,0.999422 h 0.9994222 v -0.973583 c 1.114e-4,-0.0086 1.114e-4,-0.01724 0,-0.02584 v -1.000455 h 5.168e-4 V 17.999934 H 8.000029 v -5.17e-4 -1.999878 H 5.9996343 V 13.999661 H 3.9997563 V 13.973301 11.999778 9.9999 7.999505 5.999628 h 1.999878 V 3.99975 H 8.000029 9.9999069 V 5.999628 H 11.999785 V 3.999755 2.999299 C 11.999466,2.447084 11.551541,1.999625 10.999329,1.999877 H 9.9999069 8.000029 5.9996343 Z M 11.999785,5.999633 V 7.99951 h 1.999877 V 5.999633 Z m 1.999877,0 h 2.000395 V 3.999755 h 1.999878 1.999878 V 1.999877 h -1.999878 -1.999878 -0.999422 c -0.552214,-2.52e-4 -1.000137,0.447207 -1.000456,0.999422 v 1.000456 h -5.17e-4 z m 6.000151,-1.999878 v 1.999878 h 1.999878 V 3.999755 h 5.17e-4 V 2.999299 C 21.999889,2.447084 21.551963,1.999625 20.999752,1.999877 H 20.00033 v 0.973584 c -1.11e-4,0.0086 -1.11e-4,0.01724 0,0.02584 v 1.000456 z m 2.000395,0 v 0.973584 c -1.11e-4,0.0086 -1.11e-4,0.01724 0,0.02584 v 1.000456 h -5.17e-4 v 1.999877 2.000395 1.999878 1.973523 0.02636 h -1.999878 v 1.999878 h -1.999878 v 1.999878 h -5.17e-4 v 5.17e-4 h -1.999361 v 1.999878 h -2.000395 v 1.999877 H 11.999785 V 19.999812 H 9.9999069 v 1.999877 1.000456 c 3.191e-4,0.552214 0.4482431,0.999675 1.0004561,0.999422 h 0.999422 1.999877 0.999423 c 0.552212,2.53e-4 1.000136,-0.447208 1.000455,-0.999422 v -1.000456 h 5.17e-4 0.999422 c 0.552213,2.53e-4 1.000137,-0.447208 1.000456,-0.999422 v -1.000455 -5.17e-4 h 0.998905 c 0.552214,2.53e-4 1.000137,-0.447211 1.000456,-0.999422 v -0.999939 h 5.17e-4 v -0.001 h 0.999422 c 0.552213,2.53e-4 1.000136,-0.446694 1.000456,-0.998905 v -1.000456 -0.02636 h 0.999422 c 0.552211,2.52e-4 1.000137,-0.44721 1.000456,-0.999422 V 13.99969 h 5.17e-4 V 11.999812 9.999934 7.999539 5.999662 4.999206 C 23.999767,4.446991 23.551841,3.999532 22.99963,3.999784 Z"
            />
            <path
                fill="#cccccc"
                opacity={0.125}
                d="m 19.999813,3.999755 v 1.999878 h 1.999878 v 1.999877 2.000395 1.999878 1.999878 h -1.999878 v 1.999878 h -2.000395 v 2.000395 H 15.99954 v 1.999878 h -1.999877 v 1.999877 H 11.999785 V 19.999812 H 9.9993903 V 17.999934 H 7.9995123 V 15.999539 H 5.9996343 V 13.999661 H 3.9997563 V 11.999783 9.999905 7.99951 5.999633 h 1.999878 V 3.999755 h 1.999878 1.999878 V 5.999633 H 11.999785 V 7.99951 h 1.999878 V 5.999633 H 15.99954 V 3.999755 h 1.999878 z"
            />
            <path
                fill="#1a1a1a"
                d="M 3.0003337,0 C 2.4481216,-2.52e-4 2.0001969,0.447207 1.9998779,0.999422 V 1.999878 H 1.0004557 C 0.44824385,1.999626 3.1899904e-4,2.447085 0,2.9993 v 1.000456 1.999877 2.000395 1.999878 1.973523 0.02636 0.974101 c 3.1909904e-4,0.552212 0.44824347,0.999674 1.0004557,0.999422 h 0.9994222 v 0.02636 1.000456 c 3.191e-4,0.552211 0.4482433,0.999158 1.0004558,0.998905 h 0.9994222 v 10e-4 h 5.167e-4 v 0.999939 c 3.191e-4,0.552211 0.4482433,0.999675 1.0004558,0.999422 h 0.9994222 v 5.17e-4 h -5.168e-4 v 1.000455 c 3.191e-4,0.552214 0.4482435,0.999675 1.0004557,0.999422 h 0.9994222 v -0.973583 c 1.114e-4,-0.0086 1.114e-4,-0.01724 0,-0.02584 V 17.99991 h 5.168e-4 V 16.000057 H 6.0001506 V 15.99954 13.999662 H 3.9997559 V 11.999784 H 1.9998779 V 11.973424 9.999901 8.000023 5.999628 3.999751 h 1.999878 V 1.999873 H 6.0001506 8.0000285 V 3.999751 H 9.9999064 V 1.999878 0.999422 C 9.9995874,0.447207 9.5516629,-2.52e-4 8.9994507,0 H 8.0000285 6.0001506 3.9997559 Z M 9.9999064,3.999756 V 5.999633 H 11.999784 V 3.999756 Z m 1.9998776,0 h 2.000395 V 1.999878 h 1.999878 1.999878 V 0 H 16.000057 14.000179 13.000757 C 12.448543,-2.52e-4 12.00062,0.447207 12.000301,0.999422 v 1.000456 h -5.17e-4 z m 6.000151,-1.999878 v 1.999878 h 1.999878 V 1.999878 h 5.17e-4 V 0.999422 C 20.000011,0.447207 19.552085,-2.52e-4 18.999874,0 h -0.999422 v 0.973584 c -1.11e-4,0.0086 -1.11e-4,0.01724 0,0.02584 V 1.99988 Z m 2.000395,0 v 0.973584 c -1.11e-4,0.0086 -1.11e-4,0.01724 0,0.02584 v 1.000456 h -5.17e-4 v 1.999877 2.000395 1.999878 1.973523 0.02636 h -1.999878 v 1.999878 h -1.999878 v 1.999878 h -5.17e-4 v 5.17e-4 h -1.999361 v 1.999878 h -2.000395 v 1.999877 H 9.9999064 V 17.999935 H 8.0000285 v 1.999877 1.000456 c 3.191e-4,0.552214 0.4482435,0.999675 1.0004557,0.999422 h 0.9994222 1.9998776 0.999423 c 0.552212,2.53e-4 1.000136,-0.447208 1.000455,-0.999422 v -1.000456 h 5.17e-4 0.999422 c 0.552213,2.53e-4 1.000137,-0.447208 1.000456,-0.999422 v -1.000455 -5.17e-4 h 0.998905 c 0.552214,2.53e-4 1.000137,-0.447211 1.000456,-0.999422 v -0.999939 h 5.17e-4 v -0.001 h 0.999422 c 0.552213,2.53e-4 1.000136,-0.446694 1.000456,-0.998905 v -1.000456 -0.02636 h 0.999422 c 0.552211,2.52e-4 1.000137,-0.44721 1.000456,-0.999422 v -0.974101 h 5.17e-4 V 9.999935 8.000057 5.999662 3.999785 2.999329 C 21.999889,2.447114 21.551963,1.999655 20.999752,1.999907 Z" 
            />
            <path
                fill="#ff2a2a"
                d="m 17.999935,1.999878 v 1.999878 h 1.999878 v 1.999877 2.000395 1.999878 1.999878 h -1.999878 v 1.999878 H 15.99954 v 2.000395 h -1.999878 v 1.999878 h -1.999877 v 1.999877 H 9.9999069 V 17.999935 H 7.9995119 V 16.000057 H 5.9996339 V 13.999662 H 3.9997559 V 11.999784 H 1.9998779 V 9.999906 8.000028 5.999633 3.999756 h 1.999878 V 1.999878 h 1.999878 1.999878 v 1.999878 h 2.000395 V 5.999633 H 11.999785 V 3.999756 h 1.999877 V 1.999878 h 1.999878 z"
            />
        </svg>
    );
}

export function CupSvg({...props}: any): JSX.Element {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 23.999533 20.00033"
            version="1.1"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg" >
        <path
            id="path13775"
            opacity={0.125}
            fill="#999999"
            d="m 3.9999958,3.9997125 a 2,2 0 0 0 -1.99988,2.0004 v 1.99936 2.00039 1.9998795 1.99988 1.99988 2.00039 1.99988 a 2,2 0 0 0 1.99988,2.00039 v -5.1e-4 h 1.99988 2.00039 1.9998802 1.99988 1.99987 1.99988 v 5.1e-4 a 2,2 0 0 0 1.52859,-0.71158 h 0.001 v -0.002 a 2,2 0 0 0 0.47026,-1.28726 h 1.99987 2.0004 v 5.2e-4 a 2,2 0 0 0 1.99988,-2.0004 v -2.00039 -1.99988 -1.99988 -1.9998795 -2.00039 a 2,2 0 0 0 -1.99988,-2.0004 v 5.2e-4 h -2.00036 -1.99988 a 2,2 0 0 0 -1.99988,-1.99983 h -1.99988 -1.99987 -1.99988 -1.9998802 -2.00039 z" />
        <path
            id="rect12029-80"
            fill="#1a1a1a"
            d="m 2.0001158,1.9998425 a 2,2 0 0 0 -1.99988004316,2.00039 v 1.99936 2.0004 1.99987 1.9998795 1.99988 2.00039 1.99988 A 2,2 0 0 0 2.0001158,20.000292 v -5.2e-4 h 1.99988 2.00039 1.99988 1.9998802 1.99988 1.99987 v 5.2e-4 a 2,2 0 0 0 1.52859,-0.71159 h 0.001 v -0.002 a 2,2 0 0 0 0.47026,-1.28726 h 1.99988 2.00039 v 5.2e-4 a 2,2 0 0 0 1.99988,-2.0004 v -2.00044 -1.99988 -1.9998795 -1.99987 -2.0004 a 2,2 0 0 0 -1.99985,-2.00039 v 5.1e-4 h -2.00039 -1.99988 a 2,2 0 0 0 -1.99988,-1.99987 h -1.99987 -1.99988 -1.9998802 -1.99988 -2.00039 z" />
        <path
            id="rect12029-8-7"
            fill="#4d4d4d"
            d="m 2.0001158,3.9997125 v 1.99988 2.0004 1.99987 1.9998795 1.99988 2.00039 1.99988 h 1.99988 2.00039 1.99988 1.9998802 1.99988 1.99987 v -1.99988 -2.00039 -1.99988 -1.9998795 -1.99987 -2.0004 -1.99988 h -1.99987 -1.99988 -1.9998802 -1.99988 -2.00039 z m 13.9996602,1.99988 v 2.0004 h 1.99988 v 1.99987 1.9998795 1.99988 h -1.99988 v 2.00039 h 1.99988 a 2,2 0 0 0 1.99988,-2.00039 h 5.1e-4 v -1.99988 -1.9998795 -1.99987 h -5.1e-4 a 2,2 0 0 0 -1.99988,-2.0004 z" />
        </svg>
    );
}

export function HammerSvg({...props}: any): JSX.Element {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            version="1.1"
            id="svg5"
            xmlns="http://www.w3.org/2000/svg" >
            <path
                opacity="0.5"
                fill="#b3b3b3"
                d="m 8.0000285,1.999878 a 2,2 0 0 0 -1.999878,1.999878 h -5.167e-4 a 2,2 0 0 0 -1.999878,1.999878 v 5.17e-4 A 2,2 0 0 0 1.9998779,8.000029 v 1.999878 1.999878 a 2,2 0 0 0 1.9998779,1.999878 2,2 0 0 0 1.999878,1.999878 h 2.0003947 v 2.000394 1.999878 a 2,2 0 0 0 1.9998777,1.999878 2,2 0 0 0 1.9998778,1.999878 2,2 0 0 0 1.999878,-1.999878 v -1.999878 h 5.17e-4 v 1.999878 a 2,2 0 0 0 1.999878,-1.999878 v -1.999878 -2.000394 -1.999878 a 2,2 0 0 0 1.999878,-1.999878 h 1.999878 a 2,2 0 0 0 1.999878,1.999878 2,2 0 0 0 1.999878,-1.999878 h 5.17e-4 V 9.999907 8.000029 5.999634 3.999756 h -5.17e-4 A 2,2 0 0 0 21.999691,1.999878 2,2 0 0 0 19.999813,3.999756 H 17.999935 A 2,2 0 0 0 16.000057,1.999878 H 13.999662 11.999784 9.9999062 Z"
            />
            <path
                fill="#1a1a1a"
                d="m 6.0001506,0 a 2,2 0 0 0 -1.999878,1.999878 h -5.167e-4 a 2,2 0 0 0 -1.999878,1.999878 v 5.17e-4 A 2,2 0 0 0 0,6.000151 v 1.999878 1.999878 a 2,2 0 0 0 1.9998779,1.999878 2,2 0 0 0 1.999878,1.999878 h 2.0003947 v 2.000394 1.999878 a 2,2 0 0 0 1.9998779,1.999878 2,2 0 0 0 1.9998779,1.999878 2,2 0 0 0 1.9998776,-1.999878 v -1.999878 h 5.17e-4 v 1.999878 a 2,2 0 0 0 1.999878,-1.999878 v -1.999878 -2.000394 -1.999878 a 2,2 0 0 0 1.999878,-1.999878 h 1.999878 a 2,2 0 0 0 1.999878,1.999878 2,2 0 0 0 1.999878,-1.999878 h 5.17e-4 V 8.000029 6.000151 3.999756 1.999878 h -5.17e-4 A 2,2 0 0 0 19.999813,0 2,2 0 0 0 17.999935,1.999878 H 16.000057 A 2,2 0 0 0 14.000179,0 H 11.999784 9.9999064 8.0000285 Z"
            />
            <path
                fill="#c4833c"
                d="M 9.9999064,8.000029 A 2,2 0 0 0 8.0000285,9.999907 v 1.999878 1.999878 2.000394 1.999878 a 2,2 0 0 0 1.9998779,1.999878 2,2 0 0 0 1.9998776,-1.999878 V 16.000057 13.999663 11.999785 9.999907 A 2,2 0 0 0 9.9999064,8.000029 Z"
            />
            <path
                fill="#808080"
                d="m 6.0001506,1.999878 a 2,2 0 0 0 -1.999878,1.999878 h -5.167e-4 a 2,2 0 0 0 -1.999878,1.999878 h 1.999878 v 5.17e-4 h -1.999878 v 1.999878 1.999878 a 2,2 0 0 0 1.999878,1.999878 2,2 0 0 0 1.9998779,-1.999878 h 5.168e-4 V 8.999968 a 1.0000305,1 0 0 1 0.9999389,-0.999939 1.0000305,1 0 0 1 0.999939,0.999939 v 0.999939 h 1.9998779 1.9998776 2.000395 a 2,2 0 0 0 1.999878,-1.999878 h 1.999878 a 2,2 0 0 0 1.999878,1.999878 V 8.000029 6.000151 3.999756 1.999878 A 2,2 0 0 0 17.999935,3.999756 H 16.000057 A 2,2 0 0 0 14.000179,1.999878 H 11.999784 9.9999064 8.0000285 Z"
            />
        </svg>
    );
}
interface IconsDictionary {
    [key: string]: JSX.Element;
}

const ICONS: IconsDictionary = {
    heart: <HeartSvg/>,
    cup: <CupSvg/>,
    hammer: <HammerSvg/>
};

type IconBoxProps = {
    children?: any;
    name: string;
    
} & BoxProps;

export function IconBox({children, name, ...props }: IconBoxProps) {
    return (
        <Box {...props} sx={{ padding: 2, maxHeight: '10cm', borderRadius: '5mm' }}>
            <CardMedia sx={{ height: '2cm' }}>
                {ICONS[name]}
            </CardMedia>
        </Box>
    );
}
