const pkg = require('./package')
console.log('ENV', process.env.NODE_ENV)

module.exports = {
  router: {
    base: '/',
    linkExactActiveClass: 'active'
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Cleta Chainlink NFT',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Cleta Chainlink Hackathons participation involving NFT Marketplace Tools'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css',
        integrity:
          'sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['assets/css/nucleo/css/nucleo.css', 'assets/sass/argon.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/amplify.js', mode: 'client' },
    { src: '~/plugins/auth.js' },
    { src: '~/plugins/logger.js' },
    '~/plugins/dashboard/dashboard-plugin',
    { src: '~/plugins/dashboard/full-calendar', ssr: false },
    { src: '~/plugins/dashboard/world-map', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/components',
    '@nuxt/content',
    'nuxt-i18n',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          greeting: 'Hello world!'
        },
        es: {
          greeting: '¡Hola mundo!'
        }
      }
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    extractCSS: process.env.NODE_ENV === 'production',
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    }
  }
}
