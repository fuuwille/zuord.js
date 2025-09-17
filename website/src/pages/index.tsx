import React, { useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefitsData } from '@site/src/data/benefits';
import { Box, Grid } from '@mui/material';

export default function Home() {
  const waveRef = useRef(null);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return;

    const duration = 60;
    const now = new Date();
    const seconds = now.getSeconds() + now.getMinutes() * 60;
    const progress = (seconds % duration) / duration;

    wave.style.animationDelay = `-${progress * duration}s`;
  }, []);

  return (
    <Layout title="Zuord">

      <Box className="hero" flexDirection={{ xs: 'column', md: 'row' }}>
        <Box ref={waveRef} className="wave"></Box>
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

      <Grid container margin={2} spacing={2}>
        <Grid size={12} container alignItems="flex-end">
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsData.syncAPI} />
          </Grid>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsData.zeroCostRT} />
          </Grid>
        </Grid>
        <Grid size={12} container alignItems="flex-start" flexDirection={{ xs: 'column-reverse', xl: 'row' }}>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsData.recursive} />
          </Grid>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsData.configurable} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}