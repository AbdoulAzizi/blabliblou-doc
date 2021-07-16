module.exports = {
  lang: 'fr-FR',
  title: 'Documentation Blabliblou',
  description: 'Documentation Blabliblou',

  themeConfig: {
    repo: 'AbdoulAzizi/blabliblou-doc',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Modifier cette page sur GitHub',
    lastUpdated: 'Dernière mise à jour:',

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
        { text: 'Bienvenue (Welcome)', link: '/guide/services/welcome' },
        {
          text: 'Ma gestion',
          link: '/guide/services/magestion/index',
        },
        {
          text: 'Facture (Invoice)',
          link: '/guide/services/invoice/index',
        },
        {
          text: 'Comptes Bancaires',
          link: '/guide/services/bankaccount/index',
        },
        {
          text: 'Transactions',
          children: [
            {
              text: 'Catégorie',
              link: '/guide/services/transactions/category/',
            },
            {
              text: 'Sous-Catégory',
              link: '/guide/services/transactions/subcategory/',
            },
            {
              text: 'Transaction',
              link: '/guide/services/transactions/transaction/',
            },
          ],
        },
        { text: 'Mes Encours', link: '/guide/services/mesencours/index' },
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
