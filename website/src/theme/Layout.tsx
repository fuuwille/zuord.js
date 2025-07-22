import OriginalLayout from '@theme-original/Layout';
import { Analytics } from '@vercel/analytics/react';

export default function Layout(props: React.ComponentProps<typeof OriginalLayout>) {
  return (
    <>
      <OriginalLayout {...props} />
      <Analytics />
    </>
  );
}