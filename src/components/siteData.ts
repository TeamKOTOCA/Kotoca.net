export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
  { href: '/#team', label: 'Team' },
  { href: '/#activities', label: 'Activities' },
  { href: '/#communities', label: 'Community' },
  { href: '/#contact', label: 'Contact' },
];

const images_pro = import.meta.glob<{ default: ImageMetadata }>('/src/assets/projects/*.{jpeg,jpg,png,gif,webp}', { eager: true });

export const projects = [
  {
    title: 'Uploader',
    description: '操作がとても簡単なファイル募集サイトです。',
    image: images_pro['/src/assets/projects/uploader.webp']?.default,
    imageAlt: 'Uploaderの画像',
    links: [{ href: 'https://github.com/TeamKOTOCA/Uploader', label: 'GitHub' }],
  },
  {
    title: 'Portapad',
    description: 'スマートフォンなどをPCの入力デバイスとして使えるようにするソフトで、現在は再設計を進めています。',
    image: images_pro['/src/assets/projects/portapad.png']?.default,
    imageAlt: 'Portapad のイメージ',
    links: [
      { href: 'https://github.com/TeamKOTOCA/PortaPad', label: 'GitHub (host)' },
      { href: 'https://github.com/TeamKOTOCA/portapad_web', label: 'GitHub (client)' },
      { href: 'https://github.com/TeamKOTOCA/Portapad_signal_pub', label: 'GitHub (signal server)' },
    ],
  },
  {
    title: 'KOTOCA Sites Backend',
    description: 'フォーム受付や運用まわりを支える、周辺サービス向けのバックエンド基盤です。',
    image: images_pro['/src/assets/projects/noimg.png']?.default,
    imageAlt: 'Kotoca Sites Backend のイメージ',
    links: [{ href: 'https://github.com/TeamKOTOCA', label: 'Organization' }],
  },
];

export const newsItems = [
  {
    date: '2026-03-18',
    title: '公式サイトをAstro SSG構成へ移行',
    summary: 'Cloudflare Pagesで配信しやすい静的構成に刷新し、Blogを追加しました。',
  },
  {
    date: '2026-02-28',
    title: '新規メンバー募集を継続中',
    summary: 'プログラミング / マーケティング / インフラに関心のある仲間を、学生・社会人問わず募集しています。',
  },
];


const images_mem = import.meta.glob<{ default: ImageMetadata }>('/src/assets/members/*.{jpeg,jpg,png,gif,webp}', { eager: true });

export const teamMembers = [
  {
    name: 'Povo43',
    role: 'オーナー / バックエンド / アーキテクチャ',
    description: '企画から実装、運用まで横断しながら、プロジェクト全体を前に進めています。',
    image: images_mem['/src/assets/members/povo.webp']?.default,
    socials: [
      { platform: 'github', label: 'GitHub', href: 'https://github.com/Povo-43' },
      { platform: 'x', label: 'X', href: 'https://x.com/imme_kakeru' },
      { platform: 'qiita', label: 'Qiita', href: 'https://qiita.com/Povo43' },
    ],
  },
];

export const communityPartners = [
  {
    name: 'Sakana Cloud Lab',
    description: 'Swifty読み上げBotをはじめ、多様なサービスの開発・ホスティングを行うコミュニティです。',
    image: 'https://cdn.sakana11.org/cloud/sakanacloud.png',
    href: 'https://sakana11.org',
    href_value: '公式サイトへ',
  },
];
