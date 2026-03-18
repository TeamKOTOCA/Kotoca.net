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
    slug: 'build-small-learn-fast',
    date: '2026-03-16',
    title: '小さく作って早く試す、TeamKOTOCAの開発スタイル',
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
  {
    slug: 'collaboration-for-students-and-workers',
    date: '2026-03-02',
    title: '学生でも社会人でも参加しやすい共同開発の形',
    summary: '稼働時間や得意分野が違っても協力しやすい、ゆるく強いチーム設計についてまとめました。',
    hero: '生活リズムも得意分野も違うメンバーが、無理なく継続できる共同開発の進め方を紹介します。',
    sections: [
      {
        heading: '参加しやすさはルールの軽さだけで決まらない',
        paragraphs: [
          '共同開発に参加しやすい空気を作るには、単に自由度を高くするだけでは足りません。どこに情報があり、何を相談すればよく、どこまで自分の裁量で進めてよいのかが見えることが重要です。',
          'TeamKOTOCAでは、参加頻度の違いを前提にしながらも、プロジェクトの状況が追いやすいように導線を整理し、会話の入口を用意します。短い稼働時間でも追従しやすいことが継続性につながります。',
        ],
      },
      {
        heading: '役割よりも関心から動ける状態を作る',
        paragraphs: [
          '固定的な担当で線を引きすぎると、忙しい時期に作業が止まりやすくなります。そこで、TeamKOTOCAでは「自分が一番前に進められる部分」を見つけて取り組める余白を大切にしています。',
          '設計が得意な人、実装が得意な人、運用の整理が得意な人が、それぞれ自然に貢献できる状態を作ることで、参加者の幅が広がります。専門性は尊重しつつ、閉じないチームを目指しています。',
        ],
      },
      {
        heading: '長く続くチームは相談しやすさで支えられる',
        paragraphs: [
          '忙しさや経験差がある環境では、相談のしやすさが品質そのものに影響します。困ったときに早く聞ける、途中段階でも共有できる、という文化があるだけで手戻りは大きく減ります。',
          'そのために、TeamKOTOCAでは完成前のラフな状態から見せることを歓迎し、途中経過を共有すること自体を価値として扱っています。メンバーが無理なく関われる設計が、結果として強いチームを作ります。',
        ],
      },
    ],
  },
  {
    slug: 'team-supports-indie-projects',
    date: '2026-02-20',
    title: '実運用を見据えた個人開発をチームで支える',
    summary: '個人のアイデアを活かしつつ、レビューや相談で前進しやすくするための工夫を書いています。',
    hero: '個人開発の自由さを残しながら、実運用に耐える形へ近づけるためにチームができる支援を整理しました。',
    sections: [
      {
        heading: '個人開発の強みを消さない',
        paragraphs: [
          '個人開発の魅力は、意思決定の速さと発想の自由さにあります。TeamKOTOCAでは、その勢いを失わせないことを前提に、必要なタイミングだけチームの知見を差し込む形を大切にしています。',
          '最初から全員で抱えるのではなく、アイデアの核を持つ人が前に進みつつ、必要に応じてレビューや相談を受けられる状態にすることで、個人の推進力とチームの補助線を両立します。',
        ],
      },
      {
        heading: 'レビューはブレーキではなく加速装置',
        paragraphs: [
          'レビューの目的は、細かな指摘を増やすことではなく、実装者が次に進みやすくなることです。保守性、命名、責務分割、公開時のリスクなどを早めに確認しておくと、後半での大きなやり直しを避けられます。',
          '特に公開や継続運用を考えるなら、機能だけでなく導入手順や問い合わせ導線など、周辺の設計も重要です。チームで見ることで、開発者一人では気づきにくい観点を補えます。',
        ],
      },
      {
        heading: '相談できる場所が挑戦の幅を広げる',
        paragraphs: [
          '個人開発では、難所に当たったときに手が止まりやすいものです。そこに相談できる相手がいるだけで、技術選定や実装方針の候補が増え、挑戦しやすい範囲が広がります。',
          'TeamKOTOCAは、個人のアイデアを中心に置きながら、実装・設計・運用の壁を一緒に越える伴走役でありたいと考えています。個人の熱量を、継続できる形へ育てることがチームの価値です。',
        ],
      },
    ],
  },
];

export const teamMembers = [
  {
    name: 'Povo43',
    role: 'Owner / Backend / Architecture',
    description: 'アーキテクチャ設計から実装、運用まで横断して前に進めるコアメンバーです。',
    image: '/dummy.webp',
  },
  {
    name: 'Core Members',
    role: 'Web / Rust / Infra / Design',
    description: '得意分野の違うメンバーが、相談しながらそれぞれのプロジェクトを育てています。',
    image: '/dummy.webp',
  },
];

export const communityPartners = [
  {
    name: 'Sakana Cloud Lab',
    description: 'Swifty読み上げBotをはじめ、多様なサービスの開発・ホスティングを行うコミュニティです。',
    image: '/dummy.webp',
  },
];
