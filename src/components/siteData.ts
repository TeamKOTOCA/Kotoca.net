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

export const blogItems = [
  {
    slug: 'build-small-learn-fast',
    date: '2026-03-16',
    title: 'めっちゃデモ記事',
    summary: '試作・改善・継続運用まで見据えた、軽量な開発サイクルの考え方を紹介します。',
    hero: '小さな検証を繰り返して、長く使える形へ育てる。TeamKOTOCAが普段の開発で大切にしている視点をまとめました。',
    sections: [
      {
        heading: 'まずは最小構成で価値を確かめる',
        paragraphs: [
          'TeamKOTOCAでは、最初から完璧な設計図を描き切るよりも、使う人と状況を想像しながら最小構成を素早く形にすることを重視しています。最初の一歩が軽いほど、試せる回数は増え、議論も具体的になります。',
          'たとえばAPIサーバーであれば、最初に揃えるのは認証や監視の全機能ではなく、実際に触って価値を判断できる最短経路です。画面であれば、見た目を作り込みすぎる前に導線と情報の優先順位を確かめます。',
        ],
      },
      {
        heading: 'フィードバックを前提に設計する',
        paragraphs: [
          '試作を公開すると、想定外の使われ方や、開発者自身が見落としていた不便さがすぐ見えてきます。その発見を歓迎できるように、TeamKOTOCAでは変更しやすい責務分割と、小さな単位でのリリースを意識しています。',
          'レビューでは「いま必要な強さはどこか」を確認し、将来必要になるかもしれない複雑さを安易に先取りしません。必要十分な設計を積み上げることで、速度と保守性の両立を狙います。',
        ],
      },
      {
        heading: '続けられる運用まで含めて作る',
        paragraphs: [
          '小さく始めるといっても、TeamKOTOCAは実運用を見据える姿勢を手放しません。あとで困りやすい命名、責務の混在、運用導線の欠落は、早い段階から少しずつ整えます。',
          '結果として、試作で得た学びをそのまま次の改善につなげやすくなり、個人のアイデアがチームの資産へ変わっていきます。早く作ることは、雑に作ることではなく、学習速度を高めるための選択です。',
        ],
      },
    ],
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
