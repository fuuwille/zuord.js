import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefitsData } from '@site/src/data/benefits';
import { Grid } from '@mui/material';

export default function Home() {
  return (
    <Layout title="Zuord">
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