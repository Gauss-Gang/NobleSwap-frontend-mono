import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'mailto:support@gaussgang.com',
        isHighlighted: true,
      },
      {
        label: t('Community'),
        href: 'https://discord.gg/gauss',
      },
      {
        label: 'Litepaper',
        href: 'https://docs.gaussgang.com/home/important-docs/whitepaper/what-is-gauss',
      },
    ],
  },
  // {
  //   label: t('Help'),
  //   items: [
  //     {
  //       label: t('Customer Support'),
  //       href: '/',
  //     },
  //     {
  //       label: t('Troubleshooting'),
  //       href: '/',
  //     },
  //     {
  //       label: t('Guides'),
  //       href: '/',
  //     },
  //   ],
  // },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Gauss-Gang/GaussSwap-frontend',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.gaussgang.com/',
      },
      {
        label: t('Bug Bounty'),
        href: '/',
      },
      {
        label: t('Audits'),
        href: '/',
      },
    ],
  },
]
