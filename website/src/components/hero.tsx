import style from '@site/src/css/modules/hero.module.scss';
import { Box } from "@mui/material";

export const Hero = () => {
    return (
        <Box className={style['hero']} flexDirection={{ xs: 'column', md: 'row' }}>
            <Box className={style['wave']} />
            <Box className={style['content']}>
                <Box className={style['title']}>Zuord</Box>
                <Box className={style['divider']} display={{ xs: 'none', md: 'block' }}>/</Box>
                <Box className={style['description']}
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