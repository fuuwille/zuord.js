import React from 'react';
import Layout from '@theme/Layout';
import BenefitCard from '../components/benefitCard';

export default function Home() {
  return (
    <Layout title="Zuord">
      <BenefitCard 
        title="Runtime & Type Harmony"
        description="Zuord provides a fully synchronized API for both runtime behavior and compile-time types." />
    </Layout>
  );
}