import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as dotenv from 'dotenv';

dotenv.config();

const config: Config = {
  title: `${process.env.PRODUCT_NAME} Docs`,
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
      title: `${process.env.PRODUCT_NAME} Docs`,
      logo: {
        alt: `${process.env.PRODUCT_NAME} Logo`,
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
              label: 'Faucet',
              to: `${process.env.FAUCET_URL}`,
              target: '_blank',
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
      // links: [
      //   {
      //     title: 'Documentation',
      //     items: [
      //       {
      //         label: 'Auth Actions',
      //         to: '/modules/auth',
      //       },
      //       {
      //         label: 'Money Operations',
      //         to: '/modules/money',
      //       },
      //       {
      //         label: 'Play Mechanics',
      //         to: '/modules/play',
      //       },
      //       {
      //         label: 'Location Checks',
      //         to: '/modules/location-checks',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Developers',
      //     items: [
      //       {
      //         label: 'Platform SDKs',
      //         href: 'https://buf.build/linq/linq',
      //       },
      //       {
      //         label: 'Buf Studio',
      //         href: 'https://buf.build/studio',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/linkgg/docs',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Resources',
      //     items: [
      //       {
      //         label: 'LinQ Pay',
      //         href: 'https://linq.gg/',
      //       },
      //       {
      //         label: 'App Store',
      //         href: 'https://apps.apple.com/us/developer/galactica-games/id1680876974',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Legal',
      //     items: [
      //       {
      //         label: 'Privacy Policy',
      //         href: 'https://linq.gg/privacy-policy',
      //       },
      //       {
      //         label: 'Terms & Conditions',
      //         href: 'https://linq.gg/terms-of-use',
      //       },
      //       {
      //         label: 'Contact',
      //         href: 'mailto:help@galactica.games',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} ${process.env.PRODUCT_NAME}`,
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
