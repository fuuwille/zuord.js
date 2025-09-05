import React from 'react';
import Layout from '@theme/Layout';
import { Benefits } from '@site/src/components/benefits';
import { benefits } from '@site/src/data/benefits';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Benefits {...benefits.syncAPI} />
    </Layout>
  );
}