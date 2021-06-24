module.exports = {
  lang: 'fr-FR',
  title: 'Documentation Blabliblou',
  description: 'Documentation Blabliblou',

  themeConfig: {
    repo: 'AbdoulAzizi/blabliblou-doc',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Modifier cette page sur GitHub',
    lastUpdated: 'Last Updated',

    algolia: {
      apiKey: 'c57105e511faa5558547599f120ceeba',
      indexName: 'vitepress',
    },

    // carbonAds: {
    //   carbon: 'CEBDT27Y',
    //   custom: 'CKYD62QM',
    //   placement: 'vuejsorg',
    // },

    nav: [
      { text: 'Accueil', link: '/' },
      // { text: 'Guide', link: '/', activeMatch: '^/$|^/index/' },
    ],

    sidebar: {
      '/guide/': getGuideSidebar(),
      '/config/': getConfigSidebar(),
      '/': getGuideSidebar(),
    },
  },
};

function getGuideSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: "Introduction à l'API", link: '/guide/api_intro' },
        { text: "C'est quoi Blabliblou ?", link: '/guide/bbb_intro' },
        {
          text: 'Authentification',
          link: '/guide/auth/auth',
          children: [
            { text: "S'enregistrer(users)", link: '/guide/auth/signIn' },
            { text: 'Se connecter(login)', link: '/guide/auth/login' },
          ],
        },
      ],
    },
    {
      text: 'Pages des Services',
      children: [
        { text: 'Ma gestion', link: '/guide/magestion' },
        { text: 'Mes Encours', link: '/guide/mesencours' },
      ],
    },
  ];
}

function getConfigSidebar() {
  return [
    {
      text: 'App Config',
      children: [{ text: 'Basics', link: '/config/basics' }],
    },
    {
      text: 'Theme Config',
      children: [
        { text: 'Homepage', link: '/config/homepage' },
        { text: 'Algolia Search', link: '/config/algolia-search' },
        { text: 'Carbon Ads', link: '/config/carbon-ads' },
      ],
    },
  ];
}
