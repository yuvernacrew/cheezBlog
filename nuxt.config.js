import getConfigForKeys from './lib/config';
import createClient from './plugins/contentful';

const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN',
]);
const client = createClient(ctfConfig);

export default {
  mode: 'universal',
  /* TODO
   ** target: 'static',
   */
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - cheezBlog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ちーずのぶろぐ。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'cheezBlog' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://cheezblog.netlify.com/',
      },
      { hid: 'og:title', property: 'og:title', content: 'cheezBlog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'ちーずのぶろぐ。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/icon-128x128.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/loading.vue',
  /*
   ** Global CSS
   */
  css: [
    'node_modules/highlightjs/styles/zenburn.css',
    'assets/scss/style.scss',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/cloudinary'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/proxy-module
    '@nuxtjs/proxy',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    'nuxt-fontawesome',
    '@nuxtjs/moment',
  ],
  styleResources: {
    scss: ['assets/scss/*.scss', 'assets/scss/**/*.scss'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  },
  router: {
    middleware: ['getStore'],
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
  },
  generate: {
    routes() {
      return client
        .getEntries(process.env.CTF_BLOG_POST_TYPE_ID)
        .then(entries => {
          return [
            ...entries.items.map(article => {
              return {
                route: `/article/${article.sys.id}`,
                payload: article,
              };
            }),
          ];
        });
    },
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab'],
      },
    ],
  },
  moment: {
    locales: ['ja'],
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
  },
};
