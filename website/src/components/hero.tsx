"use client";
import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";

export const Hero = () => {
    const waveRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const now = new Date();
        const duration = 60;
        const seconds = now.getSeconds() + now.getMinutes() * 60;
        const progress = (seconds % duration) / duration;

        const wave = waveRef.current;

        if (wave) {
            wave.style.animationDelay = `-${progress * duration}s`;
        }
    }, []);

    return (
        <Box className="hero" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box className="wave" ref={waveRef} />
            <Box className="content">
                <Box className="title">Zuord</Box>
                <Box className="divider" display={{ xs: 'none', md: 'block' }}>/</Box>
                <Box className="description"
                    display={{ xs: 'block', sm: 'inline-flex' }} 
                    fontSize={{ xs: '1rem', sm: '1.25rem' }}
                >
                    <Box>Synchronous Runtime & Type APIs</Box>
                    <Box>within TS-first Packages</Box>
                </Box>
            </Box>
        </Box>
    );
}