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
      ],
    },
    {
      text: 'Espace utilisateur',
      children: [
        // Signup & Signin & update password
        {
          text: 'Authentification',
          link: '/guide/user-area/index',
          children: [
            { text: "S'enregistrer(users)", link: '/guide/user-area/signup' },
            { text: 'Se connecter(login)', link: '/guide/user-area/signin' },
            { text: 'Récupérer l\'ulisateur connecté', link: '/guide/user-area/get-connected-user' },
            // Change password
            { text: "Modifier le mot de passe", link: '/guide/user-area/change-password' },
            // Forgot password
            {
              text: 'Mot de passe oublié',
              children: [
                { text: "Demander l'email de recupération", link: '/guide/user-area/send-reset-password-link' },
                { text: "Réinitialiser le mot de passe", link: '/guide/user-area/reset-password' },
              ],
            },

          ],
        },
        // Update user details
        {
          text: 'MAJ d\'utilisateur',
          children: [
            { text: "Modifier utilisateur", link: '/guide/user-area/update-user' },
            { text: "Gestion des données client", link: '/guide/user-area/manage-user-profile' },
          ],
        },

        // Manage persons
        {
          text: 'Gestion du personnel',
          children: [
            { text: "Créer un gérant", link: '/guide/user-area/persons/add-manager' },
            { text: "Supprimer un gérant", link: '/guide/user-area/persons/delete-manager' },
            { text: "Lister les gérants", link: '/guide/user-area/persons/get-managers' },
            
            { text: "Créer un salarie", link: '/guide/user-area/persons/add-employee' },
            { text: "Supprimer un salarie", link: '/guide/user-area/persons/delete-employee' },
            { text: "Lister les salaries", link: '/guide/user-area/persons/get-employees' },
          ],
        },

        // Documents
        {
          text: 'Documents client',
          children: [
            { text: "Chargement d'un document", link: '/guide/user-area/files/upload-doc' },
            { text: "Récupération des documents", link: '/guide/user-area/files/get-docs' },
            { text: "Suppression d'un document", link: '/guide/user-area/files/delete-doc' },
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
            {
              text: 'Affectation',
              link: '/guide/services/transactions/affectation/',
            },
            {
              text: 'Importation',
              link: '/guide/services/transactions/import/',
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
