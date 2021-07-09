import colors from 'vuetify/es5/util/colors'
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const BACKEND_BASE_URL = `${process.env.BASE_URL}${process.env.BACKEND_PORT}`
const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`
const API_BASE_URL = BACKEND_BASE_URL + process.env.API_PREFIX

const SITE_NAME = process.env.SITE_NAME
const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION
const SITE_IMAGE = process.env.SITE_IMAGE

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - jett-analysis.web',
    title: 'jett-analysis.web',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: SITE_DESCRIPTION },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/site-config.js' },
    { src: '~/plugins/number-abbreviator.js' },
    { src: '~/plugins/persisted-state.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/robots', 
    '@nuxtjs/sitemap', 'nuxt-seo-meta'
  ],

  dotenv: { filename: `.env.${process.env.NODE_ENV}` },

  robots: [
    {
      UserAgent: '*',
      Allow: '/',
      Disallow: '/admin',
      Sitemap: FRONTEND_BASE_URL + '/sitemap.xml'
    }
  ],

  sitemap: {
    hostname: FRONTEND_BASE_URL,
    excludes: ['/admin/**']
  },

  seoMeta: {
    defaultDescription: SITE_DESCRIPTION,
    defaultUrl: FRONTEND_BASE_URL,
    defaultImage: SITE_IMAGE,
    siteName: SITE_NAME,
    twitterUser: 'jett_analysis'
  },

  publicRuntimeConfig: {
    axios: { baseURL: API_BASE_URL }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        options: {
          data: {}
        }
      })
    }
  }
}
