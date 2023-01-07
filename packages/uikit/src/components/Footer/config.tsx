import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "mailto:support@gaussgang.com",
      },
      {
        label: "Community",
        href: "https://discord.gg/gauss",
      },
      {
        label: "Litepaper",
        href: "https://docs.gaussgang.com/home/important-docs/whitepaper/what-is-gauss",
      },
    ],
  },
  // {
  //   label: "Help",
  //   items: [
  //     {
  //       label: "Customer",
  //       href: "Support https://docs.pancakeswap.finance/contact-us/customer-support",
  //     },
  //     {
  //       label: "Troubleshooting",
  //       href: "https://docs.pancakeswap.finance/help/troubleshooting",
  //     },
  //     {
  //       label: "Guides",
  //       href: "https://docs.pancakeswap.finance/get-started",
  //     },
  //   ],
  // },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/Gauss-Gang/NobleSwap-frontend-mono",
      },
      {
        label: "Documentation",
        href: "https://docs.gaussgang.com/",
      },
      {
        label: "Bug Bounty",
        href: "/",
      },
      {
        label: "Audits",
        href: "/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/gaussgang",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/GaussGang",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/GaussGangIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/GaussGang_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/GaussGangVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/GaussGang_ita",
      },
      {
        label: "русский",
        href: "https://t.me/GaussGang_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/GaussGangturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/GaussGangPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/GaussGangEs",
      },
      {
        label: "日本語",
        href: "https://t.me/GaussGangjp",
      },
      {
        label: "Français",
        href: "https://t.me/GaussGangfr",
      },
      {
        label: "Deutsch",
        href: "https://t.me/GaussGang_DE",
      },
      {
        label: "Filipino",
        href: "https://t.me/GaussGang_Ph",
      },
      {
        label: "ქართული ენა",
        href: "https://t.me/GaussGangGeorgia",
      },
      {
        label: "हिन्दी",
        href: "https://t.me/GaussGangINDIA",
      },
      {
        label: "Announcements",
        href: "https://t.me/GaussGangAnn",
      },
    ],
  },
  // {
  //   label: "Reddit",
  //   icon: RedditIcon,
  //   href: "https://reddit.com/r/pancakeswap",
  // },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/gauss.gang/",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/Gauss-Gang/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.com/invite/gauss",
  },
  // {
  //   label: "Medium",
  //   icon: MediumIcon,
  //   href: "https://medium.com/pancakeswap",
  // },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
