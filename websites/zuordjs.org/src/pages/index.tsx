import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout {...siteConfig} >
      <main>
        {"<HomepageFeatures />"}
      </main>
    </Layout>
  );
}