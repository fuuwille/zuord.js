"use client";
import { Box } from "@mui/material";

export const Hero = () => {
    const duration = 60;

    // Saniyeyi client-side hemen hesapla, SSR'da 0 olarak bırak
    const seconds =
        typeof window !== "undefined"
        ? new Date().getSeconds() + new Date().getMinutes() * 60
        : 0;

    const progress = (seconds % duration) / duration;

    return (
        <Box className="hero" flexDirection={{ xs: 'column', md: 'row' }}>
            <Box className="wave"
                style={{ animationDelay: `-${progress * duration}s` }}
            />
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