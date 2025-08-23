import React from 'react';
import Layout from '@theme/Layout';
import BenefitCard from '../components/benefitCard';

export default function Home() {
  return (
    <Layout title="Zuord">
      <BenefitCard title={"Harmony Between Runtime and Type"}/>
    </Layout>
  );
}