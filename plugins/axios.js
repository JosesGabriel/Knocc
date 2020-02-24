import { IsInArray } from "~/assets/js/helpers/arrays/urls";

/**
 * Extends the nuxt-axios package
 *
 * @param {*} {}
 */
export default function({ $axios, redirect }) {
  // list of exempted urls
  const urls = [process.env.STREAM_API_URL, process.env.VYNDUE_API_URL];

  // region custom handlers
  /**
   * Handles every axios request
   */
  $axios.interceptors.request.use(
    config => {
      const token = localStorage["auth._token.local"];

      //  assign if token is not null and the request url is not found in urls
      if (token != null && !IsInArray(urls, config.url)) {
        config.headers.Authorization = token;
      }

      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  /**
   * Set global authorization token
   */
  $axios.setGlobalAuth = () => {
    $axios.defaults.headers.common["Authorization"] =
      localStorage["auth._token.local"];
  };
  // endregion custom handlers

  // region override
  /**
   * Set on request callback
   */
  $axios.onRequest(config => {});

  /**
   * Set error callback
   */
  $axios.onError(error => {
    // TODO handle global errors
    //   const code = parseInt(error.response && error.response.status)
    //   if (code === 400) {
    //     redirect('/400')
    //   }
  });
  // endregion override
}
