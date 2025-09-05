import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefitsBody } from '@site/src/data/benefits';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Grid container margin={2} spacing={2} display={{ xs: 'none', xl: 'flex' }}>
        <Grid size={{ lg: 6, xl: 6 }}>
          <Benefits {...benefitsBody.syncAPI} />
        </Grid>
        <Grid size={{ lg: 6, xl: 6 }}>
          <Benefits {...benefitsBody.zeroCostRI} />
        </Grid>
      </Grid>
      <Grid container margin={2} spacing={2} display={{ xs: 'flex', xl: 'none' }}>
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