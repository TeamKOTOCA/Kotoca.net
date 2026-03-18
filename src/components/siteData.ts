export const navItems = [
  { href: '/#about', label: '組織について' },
  { href: '/#projects', label: 'プロジェクト' },
  { href: '/news', label: 'News' },
  { href: '/blog', label: 'Blog' },
  { href: '/#team', label: 'メンバー' },
  { href: '/#activities', label: '活動' },
  { href: '/#communities', label: '連携コミュニティ' },
  { href: '/#contact', label: 'お問い合わせ' },
];

export const projects = [
  {
    title: 'microhttp',
    description: '組み込み用途に設計した超小型のC言語製軽量APIサーバー。',
    links: [{ href: 'https://github.com/TeamKOTOCA/microhttapi', label: 'GitHub' }],
  },
  {
    title: 'Portapad',
    description: 'スマホなどをPCの入力装置に変えるソフト。現在は再設計の準備中です。',
    links: [
      { href: 'https://github.com/TeamKOTOCA/PortaPad', label: 'GitHub(host)' },
      { href: 'https://github.com/TeamKOTOCA/portapad_web', label: 'GitHub(client)' },
      { href: 'https://github.com/TeamKOTOCA/Portapad_signal_pub', label: 'GitHub(sig_server)' },
    ],
  },
  {
    title: 'Kotoca Sites Backend',
    description: 'フォーム受付や運用系導線を支える、周辺サービス群のバックエンド基盤。',
    links: [{ href: 'https://github.com/TeamKOTOCA', label: 'Organization' }],
  },
];

export const newsItems = [
  {
    date: '2026-03-18',
    title: '公式サイトをAstro SSG構成へ移行',
    summary: 'Cloudflare Pagesで配信しやすい静的構成に刷新し、News / Blog導線も追加しました。',
  },
  {
    date: '2026-03-10',
    title: 'TeamKOTOCAの開発導線を整理',
    summary: 'プロジェクト・コミュニティ・参加方法を横断して把握できるようにトップ情報を再整理しました。',
  },
  {
    date: '2026-02-28',
    title: '新規メンバー募集を継続中',
    summary: 'Web / Rust / C / インフラに関心のある仲間を、学生・社会人問わず募集しています。',
  },
];

export const blogItems = [
  {
    date: '2026-03-16',
    title: '小さく作って早く試す、TeamKOTOCAの開発スタイル',
    summary: '試作・改善・継続運用まで見据えた、軽量な開発サイクルの考え方を紹介します。',
  },
  {
    date: '2026-03-02',
    title: '学生でも社会人でも参加しやすい共同開発の形',
    summary: '稼働時間や得意分野が違っても協力しやすい、ゆるく強いチーム設計についてまとめました。',
  },
  {
    date: '2026-02-20',
    title: '実運用を見据えた個人開発をチームで支える',
    summary: '個人のアイデアを活かしつつ、レビューや相談で前進しやすくするための工夫を書いています。',
  },
];
