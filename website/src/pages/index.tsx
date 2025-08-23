import React from 'react';
import Layout from '@theme/Layout';
import Benefits from '../components/benefits';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Benefits cards={[
        {
          title: "Runtime & Type Harmony",
          description: "Zuord provides a fully synchronized API for both runtime behavior and compile-time types."
        },
        {
          title: "Seamless Integration",
          description: "Zuord integrates effortlessly with existing codebases, allowing for gradual adoption."
        },
        {
          title: "Enhanced Developer Experience",
          description: "Zuord offers powerful tools and features that enhance the overall developer experience."
        }
      ]} />
    </Layout>
  );
}