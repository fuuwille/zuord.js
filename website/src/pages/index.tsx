import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefitsBody } from '@site/src/data/benefits';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Grid container margin={2} spacing={2}>
        <Grid size={12} container alignItems="flex-end">
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsBody.syncAPI} />
          </Grid>
          <Grid size={{ xs: 12, xl: 6 }}>
            <Benefits {...benefitsBody.zeroCostRT} />
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}