import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Zuord',
  tagline: 'Type-synced operations, helper utilities, and precise distinctions.',
  favicon: 'img/logo.png',
  url: 'https://www.zuordjs.org',
  baseUrl: '/',
  organizationName: 'k4yr2',
  projectName: 'zuord',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: '/fonts/fonts.css',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'font',
        href: '/fonts/Raleway-Regular.woff2',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'font',
        href: '/fonts/AtkinsonHyperlegible-Regular.woff2',
      },
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    announcementBar: {
      id: 'early_access',
      content:
        '<strong>🚧 Zuord is currently in early access 🚧</strong> <em><span style="font-size: 0.9em;">Features and content will change over time.</span></em>',
      backgroundColor: '#20232a',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'Zuord',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {
          href: 'https://github.com/k4yr2/zuord',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            //{
            //  label: 'Blog',
            //  to: '/blog',
            //},
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} k4yr2`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    'vercel-analytics',
    'docusaurus-plugin-sass'
  ]
};

export default config;
