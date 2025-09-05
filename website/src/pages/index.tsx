import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefits } from '@site/src/data/benefits';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Grid container>
        <Grid size={8}>
          <Benefits {...benefits.syncAPI} />
        </Grid>
        <Grid size={4}>
          <Benefits {...benefits.zeroRuntime} />
        </Grid>
      </Grid>
    </Layout>
  );
}