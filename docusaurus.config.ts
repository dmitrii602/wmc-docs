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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card  todo:
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: `${process.env.PRODUCT_NAME} Docs`,
      logo: {
        alt: `${process.env.PRODUCT_NAME} Logo`,
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: '/getting-started',
        //   label: 'Getting Started',
        //   position: 'left',
        // },
        // {
        //   to: '/modules/auth',
        //   position: 'left',
        //   label: 'Auth & Login',
        // },
        // {
        //   to: '/modules/location-checks',
        //   position: 'left',
        //   label: 'Locations',
        // },
        // {
        //   to: '/modules/money',
        //   position: 'left',
        //   label: 'Money',
        // },
        // {
        //   to: 'modules/authentication',
        //   position: 'left',
        //   label: 'Games',
        // },
        // {
        //   href: 'https://github.com/linqgg/unity-sdk',
        //   label: 'Unity SDK',
        //   position: 'right'
        // },
        // {
        //   href: 'https://buf.build/linq/linq',
        //   label: 'Server SDK',
        //   position: 'right'
        // },
        // {
        //   href: 'https://linq.gg/',
        //   label: 'LinQ Pay',
        //   position: 'right'
        // },
        {
          href: `${process.env.GIT_HUB_URL}`,
          label: 'GitHub',
          position: 'right',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
