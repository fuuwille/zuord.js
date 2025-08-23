import React from 'react';
import Layout from '@theme/Layout';
import Benefits from '../components/benefits';
import { benefitCards } from '../data/benefits';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Benefits cards={benefitCards} />
    </Layout>
  );
}