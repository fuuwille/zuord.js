import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefitsBody } from '@site/src/data/benefits';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Grid container margin={2} spacing={2} display={{ xs: 'none', lg: 'flex' }}>
        <Grid size={{ lg: 8, xl: 6 }}>
          <Benefits {...benefitsBody.syncAPI} />
        </Grid>
        <Grid size={{ lg: 4, xl: 6 }}>
          <Benefits {...benefitsBody.zeroCostRI} />
        </Grid>
      </Grid>
      <Grid container margin={2} spacing={2} display={{ xs: 'flex', lg: 'none' }}>
        <Grid size={12}>
          <Benefits {...benefitsBody.syncAPI} />
        </Grid>
        <Grid size={12}>
          <Benefits {...benefitsBody.zeroCostRI} />
        </Grid>
      </Grid>
    </Layout>
  );
}