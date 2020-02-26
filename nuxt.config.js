import colors from "vuetify/es5/util/colors";

require("dotenv").config();

export default {
  mode: "spa",
  server: {
    port: process.env.SERVER_PORT, // default: 3000
    host: process.env.SERVER_HOST // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,700,800,900&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/global.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~/plugins/repository" }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/vuetify"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    icons: {
      iconfont: "md"
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
          darkcard: "#0c1a2b",
          lightcard: "#f2f2f2",
          darkBG: "#00121e",
          darkIcon: "#a1b2d1"
        },
        dark: {
          anchor: colors.blue
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
    extend(config, ctx) {
      config.node = {
        console: false,
        fs: "empty",
        net: "empty",
        tls: "empty"
      };
    }
  }
};
