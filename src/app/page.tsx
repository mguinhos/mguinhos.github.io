"use client";

import { Skill, SkillFlaskLogoSvg, SkillHtml5LogoSvg, SkillJavascriptLogoSvg, SkillKivyLogoSvg, SkillPythonLogoSvg, SkillReactLogoSvg, SkillRustLogoSvg, SkillWasmLogoSvg } from "@/components/skill";
import { Box, Divider,  Stack, Typography } from "@mui/material";

export default function Home() {
    return (
        <Box padding={5}>
            <Box padding={5}>
                <Typography variant='h1'>Olá, sou Marcel Guinhos</Typography>
                <Typography variant='h3'>Desenvolvo para Web, Desktop e Mobile</Typography>
            </Box>
            <Divider />
            <Box padding={5}>
                <Typography variant="h4">Linguagens, Tecnologias e Bibliotecas que domino</Typography>
                <br />
                <Stack spacing={2} alignItems='center' direction='row' display='flex' width='100%'>
                    <Skill media={<SkillPythonLogoSvg />} label='Python' />
                    <Skill media={<SkillJavascriptLogoSvg />} label='NodeJS' />
                    <Skill media={<SkillRustLogoSvg />} label='Rust' />
                    <Skill media={<SkillHtml5LogoSvg />} label='HTML5' />
                    <Skill media={<SkillWasmLogoSvg />} label='WASM' />
                    <Skill media={<SkillReactLogoSvg />} label='ReactJS' />
                    <Skill media={<SkillFlaskLogoSvg />} label='Flask' />
                    <Skill media={<SkillKivyLogoSvg />} label='Kivy' />
                </Stack>
            </Box>
        </Box>
    );
}