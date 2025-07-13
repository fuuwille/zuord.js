import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Zuord">
      <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Welcome to Zuord</h1>
        <p style={{ fontSize: '1.125rem', color: '#888' }}>
          Type-synced operations, helper utilities, and precise distinctions.
        </p>
        <Link
          to="/docs/introduction"
          style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            fontSize: '1rem',
            backgroundColor: '#2196F3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease-in-out',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1976D2')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#2196F3')}
        >
          Get Started
        </Link>
      </main>
    </Layout>
  );
}
