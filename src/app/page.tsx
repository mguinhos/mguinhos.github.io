"use client";

import Section from "@/components/section";
import Terminal from "@/components/terminal";
import { Box, BoxProps, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, GridProps, Slide, Stack, Typography } from "@mui/material";
import React, { ReactNode, useEffect, useState } from "react";

import './globals.css';
import { Skill, SkillFlaskLogoSvg, SkillJavascriptLogoSvg, SkillKivyLogoSvg, SkillPythonLogoSvg, SkillRustLogoSvg, SkillWasmLogoSvg } from "@/components/skill";
import { IconBox } from "@/components/icons";

function ExperimentCard({ title='title', subtitle='subtitle', href='#', ...props } : { title?: string, subtitle?: string, href?: string, props?: any}) {
    return (
        <Box padding={1}>
            <Card sx={{ display: 'flex', borderRadius: '4mm'}}>
                <CardMedia
                    component="img"
                    draggable={false}
                    sx={{ width: 151 }}
                    image="blueprint.svg"
                />
                <CardActionArea href={href}>
                    <CardContent>
                        <Typography variant="h4">{title}</Typography>
                        <Typography variant="subtitle1">{subtitle}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}


function Flicker({ children, ...props}: any) {
    const [checked, setChecked] = React.useState(0);

    let ref = React.useRef<HTMLDivElement>(null);

    function onAnimationEnd() {
        setChecked(((checked +1) % children.length));
    }

    for (let i=0; i < children.length; i++) {
        const child = children[i];

        if (i != checked) {
            continue;
        }

        return (
            <Box>
                <div key={i} className='flicker' ref={ref} onAnimationEnd={onAnimationEnd}>{child}</div>
            </Box>
        )
    }
    
    return (
        <Box/>
    );
}

type TypingProps = {
    children?: any;
    text: string;
    onAnimationEnd?: any;
    delay?: number;
} & GridProps;

function Typing({children, text, onAnimationEnd, delay=10, ...props}: TypingProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (currentIndex >= text.length) {
                return onAnimationEnd? onAnimationEnd() : null;
            }

            setCurrentText(currentText + text[currentIndex]);
            setCurrentIndex(currentIndex +1);
        }, delay);

        return () => clearTimeout(timeout);
    });
    
    return <Grid container {...props}>{currentText.split(' ').map((item, i) => <a key={i} style={{padding: '0.125em'}}>{item}</a>)}</Grid>
}

type ExperimentProps = {
    thumbnail: string;
    href: string;
    title: string;
    description?: string;
} & BoxProps;

function Experiment({thumbnail, href, title, description, ...props}: ExperimentProps): JSX.Element {
    return (
        <Box className='experiment' padding={'2mm'} {...props}>
            <Card sx={{borderRadius: '32px', maxWidth: '8cm'}}>
                <CardActionArea href={href}>
                    <CardHeader sx={{position: 'absolute'}} title={title}/>
                    <CardMedia
                        component="img"
                        image={thumbnail}/>
                    
                    <CardContent>
                        <Typography variant='h5'>{description}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    );
}

export default function Home() {
    const [typingIndex, setTypingIndex] = useState(0);

    return (
        <Box padding={2}>
            <Stack direction='row' justifyContent='center'>
                <Terminal sx={{width: '90%'}}>
                    <Typography variant='h3' gutterBottom>Olá,</Typography>
                    <Grid container>
                    <Typography variant='h5'>
                        <Typing text='Sou Marcel Guinhos, e eu desenvolvo para&nbsp;' onAnimationEnd={() => setTypingIndex(typingIndex +1)}/></Typography>
                        {typingIndex > 0? 
                        <Flicker>
                            <Typography variant='h5'>Web</Typography>
                            <Typography variant='h5'>Mobile</Typography>
                            <Typography variant='h5'>Desktop</Typography>
                        </Flicker>
                        : null}
                    </Grid>
                </Terminal>
            </Stack>
            <IconBox name='heart'/>
            <Section title='Sobre mim' textAlign='center'>
                <Box textAlign='center'>
                    <Typing text='Programador júnior dedicado que quer criar um mundo melhor com café, código e arte.' onAnimationEnd={() => setTypingIndex(typingIndex +1)}/>
                </Box>
            </Section>
            <Section title='Hábilidades' textAlign='center'>
                <Grid container justifyContent='center'>
                    <Grid item><Skill media={<SkillPythonLogoSvg/>} label='Python'/></Grid>
                    <Grid item><Skill media={<SkillJavascriptLogoSvg/>} label='JavaScript'/></Grid>
                    <Grid item><Skill media={<SkillRustLogoSvg/>} label='Rust'/></Grid>
                    <Grid item><Skill media={<SkillWasmLogoSvg/>} label='WebAssembly'/></Grid>
                    <Grid item><Skill media={<SkillKivyLogoSvg/>} label='Kivy'/></Grid>
                </Grid>
            </Section>
            <IconBox name='cup'/>
            <Section title='Meus experimentos' textAlign='center'>
                <Box textAlign='center'>
                    <Typing text='Aqui estão alguns demos interativos para executar no navegador.' onAnimationEnd={() => setTypingIndex(typingIndex +1)}/>
                    <Grid container spacing={'1mm'} columns={{ xs: 4, md: 12 }}>
                        <Experiment href='https://mguinhos.github.io/Particles' thumbnail='particles.png' title='Particles' description='Uma sandbox de particulas interativo feito com javascript'/>
                        <Experiment href='https://mguinhos.github.io/react-calculator' thumbnail='react_calculator.png' title='React Calculator' description='Calculadora em react feita como exercicio.'/>
                        <Experiment href='https://mguinhos.github.io/game-of-life' thumbnail='game_of_life.png' title='Game Of Life' description='Automata celular clássico proposto por John Conway'/>
                    </Grid>
                </Box>
            </Section>
        </Box>
    );
}