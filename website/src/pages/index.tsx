import React from 'react';
import Layout from '@theme/Layout';
import Benefits from '../components/benefits';

export default function Home() {
  return (
    <Layout title="Zuord">
      <Benefits cards={testCards} />
    </Layout>
  );
}

const testCards = [
  {
    title: "Runtime & Type Harmony",
    description: "Zuord provides a fully synchronized API for both runtime behavior and compile-time types."
  },
  {
    title: "Seamless Integration",
    description: "Zuord integrates effortlessly with existing codebases, allowing for gradual adoption. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Enhanced Developer Experience",
    description: "Zuord offers powerful tools and features that enhance the overall developer experience."
  },
  {
    title: "Short",
    description: "Brief description."
  },
  {
    title: "Very Long Title to Test Text Wrapping in the Card Layout and Ensure It Looks Good on Different Screen Sizes",
    description: "A very long description text to simulate the edge case where the content spans multiple lines and tests how the layout adapts to such long content without breaking the design or causing overflow issues."
  },
  {
    title: "Multiline Description",
    description: `This description
    has multiple lines
    to check
    line breaks
    and spacing.`
  },
  {
    title: "Emoji Test 😃🔥🚀",
    description: "Including emojis to verify rendering and spacing."
  },
  {
    title: "Empty Description",
    description: ""
  },
  {
    title: "Single Word",
    description: "Word"
  },
  {
    title: "Numeric Content",
    description: "1234567890 0987654321 1122334455 5566778899"
  },
  {
    title: "HTML Content Test",
    description: "<b>Bold text</b> and <i>italic text</i> should be escaped or rendered properly."
  }
];
