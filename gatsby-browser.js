/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onClientEntry = () => {
  // fetch() polyfill for making API calls.
  require('whatwg-fetch')

  // Object.assign() is commonly used with React.
  // It will use the native implementation if it's present and isn't buggy.
  Object.assign = require('object-assign')
}
