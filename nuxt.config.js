import colors from 'vuetify/es5/util/colors'

require("dotenv").config();

export default {
  mode: 'spa',
  server: {
    port: process.env.SERVER_PORT, // default: 3000
    host: process.env.SERVER_HOST // default: localhost
  },
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  router: {
    middleware: ["auth", "protectedRoutes"]
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
 vuetify: {
  customVariables: ["~/assets/variables.scss"],
  // defaultAssets: {
  //   //breaks vuetify icons if added, use other method
  //   font: true,
  //   icons: "md"
  // },
  icons: {
    iconfont: "md"
  },
  theme: {
    themes: {
      // working level of theme
      light: {
        background: colors.grey.lighten5,
        primary: colors.blue,
        accent: colors.grey.darken3,
        secondary: "#E5E5E5",
        info: colors.purple,
        warning: colors.orange,
        error: "#F44336",
        success: "#03DAC5",
        tertiary: "#B6B6B6",
        darkcard: "#0c1a2b",
        lightcard: "#f2f2f2",
        darkchart: "#00121e",
        lightchart: "#f2f2f2",
        successhover: "#4ee5d6",
        secondarytext: "#455A64",
        headlinedark: "#263238"
      },
      theme: {
        themes: {
          light: {
            background: colors.grey.lighten5,
            primary: colors.blue,
            accent: colors.grey.darken3,
            secondary: "#E5E5E5",
            info: colors.purple,
            warning: colors.orange,
            error: "#F44336",
            success: "#03DAC5",
            tertiary: "#B6B6B6",
            darkoutline: "#1f2f39",
            lightoutline: "#DADADA",
            darkcard: "#0c1a2b",
            lightcard: "#f2f2f2",
            darkchart: "#00121e",
            lightchart: "#f2f2f2"
          },
          dark: {
            anchor: colors.blue
          }
        }
      }
    }
  }
},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
