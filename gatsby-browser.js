/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`👍 IntersectionObserver is polyfilled`)
  }

  // Object-fit/Object-position polyfill for gatsby-image (IE)
  const { objectFit, objectPosition } = document.createElement(`img`).style
  if (typeof objectFit === `undefined` || typeof objectPosition === `undefined`) {
    import(`object-fit-images`)()
    console.log(`👍 Object-fit/Object-position are polyfilled`)
  }
}
