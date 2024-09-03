import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Config = {
  title: `${process.env.BLOCKCHAIN_NETWORK} Docs`,
  favicon: 'img/favicon.ico',

  url: `${process.env.PRODUCT_URL}`,
  baseUrl: '/',

  trailingSlash: false,

  organizationName: `${process.env.ORGANIZATION_NAME}`,
  projectName: 'docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        blog: false,
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // editUrl: 'https://github.com/dmitrii602/wmt-doc/tree/master',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local', //https://github.com/easyops-cn/docusaurus-search-local?tab=readme-ov-file
      {
        hashed: false, //true
        docsRouteBasePath: '/',
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
      },
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'dev-release',
      content:
        `${process.env.ANNOUNCEMENT_BAR_TEXT}`,
      backgroundColor: '#F6642D',
      textColor: '#F8F4FF',
      isCloseable: false,
    },
    navbar: {
      title: `${process.env.BLOCKCHAIN_NETWORK} Docs`,
      logo: {
        alt: `${process.env.BLOCKCHAIN_NETWORK} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: `${process.env.HOME_URL}`,
        //   exact: true,
        //   position: 'left',
        //   label: 'Home',
        // },
        {
          to: '/',
          exact: true,
          position: 'left',
          label: 'Introduction',
        },
        {
          type: 'dropdown',
          label: 'Building',
          position: 'left',
          items: [
            {
              label: 'Network Info',
              to: '/building-with-wmtx/network-information',
            },
            {
              label: 'Contracts',
              to: '/building-with-wmtx/wmtx-contracts',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Tools',
          position: 'left',
          items: [
            {
              label: 'Node Providers',
              to: '/tools/node-providers',
            },
            {
              label: 'Block Explorers',
              to: '/tools/block-explorers',
            },
            {
              label: 'Network Faucets',
              to: '/tools/network-faucets',
            },
            {
              label: 'Onramps',
              to: '/tools/onramps',
            },
            {
              label: 'Toolchains',
              to: '/category/toolchains',
            },
          ],
        },
        {
          label: 'Bridge',
          position: 'right',
          to: `${process.env.BRIDGE_URL}`,
        },
        {
          type: 'dropdown',
          label: 'Builders',
          position: 'right',
          items: [
            {
              label: 'Block Explorer',
              to: `${process.env.BLOCK_EXPLORER_TESTNET}`,
              target: '_blank',
            },
            {
              label: 'Faucets',
              to: '/tools/network-faucets',
            },
            {
              label: 'Status',
              to: `${process.env.STATUS_URL}`,
              target: '_blank',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Socials',
          position: 'right',
          items: [
            {
              label: 'Telegram',
              target: '_blank',
              to: `${process.env.TELEGRAM_URL}`,
            },
            {
              label: 'Discord',
              target: '_blank',
              to: `${process.env.DISCORD_URL}`,
            },
            {
              label: 'Twitter',
              target: '_blank',
              to: `${process.env.TWITTER_URL}`,
            },
            {
              label: 'Github',
              target: '_blank',
              to: `${process.env.GIT_HUB_URL}`,
            },
          ],
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ${process.env.BLOCKCHAIN_NETWORK}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['protobuf'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
