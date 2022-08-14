export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  server: {
    port: 3000, // default: 3000
    // host: '10.1.1.149', // default: localhost,
    host: 'localhost', // default: localhost,
    // https: {
    //   key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
    //   cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    // }
  },

  head: {
    title: 'hunarli eller',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~assets/stylesheets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  moment: {
    defaultLocale: 'tm',
    locales: ['ru', 'tm'],
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // 'nuxt-i18n',
    '@nuxtjs/axios',
    [
      '@nuxtjs/i18n',
      {
        strategy: 'no_prefix',
        locales: [
          {
            code: 'tm',
            file: 'tm.js',
            name: 'Türkmen',
          },
          {
            code: 'ru',
            file: 'ru.js',
            name: 'Русский',
          },
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'tm',
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
