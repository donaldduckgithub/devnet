const createSitemapRoutes = async () => {
  const routes = []
  const { $content } = require('@nuxt/content')
  const posts = await $content('posts').fetch()

  for (const post of posts) {
    routes.push(`/${post.slug}`)
  }

  const totalPosts = posts.length
  const lastPage = Math.ceil(totalPosts / process.env.PER_PAGE)

  for (let i = lastPage; i > 1; i--) {
    routes.push(`/pages/${i}`)
  }

  return routes
}

const siteUrl = process.env.BASE_URL || 'http://localhost:3000'


export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,

  publicRuntimeConfig: {
    baseUrl: siteUrl,
    perPage: process.env.PER_PAGE || '5',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'turmburg',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    'nuxt-password-protect'
  ],

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css', //cool code window usw.
      },
    },
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/content'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
