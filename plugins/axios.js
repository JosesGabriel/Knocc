import { IsInArray } from "~/assets/js/helpers/arrays/urls";

/**
 * Extends the nuxt-axios package
 *
 * @param {*} {}
 */
export default function({ $axios, $auth, app }) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] = localStorage.getItem(
      "auth._token.local"
    );
  });

  /**
   * Set error callback
   */
  $axios.onError(error => {});
  // endregion override
}
