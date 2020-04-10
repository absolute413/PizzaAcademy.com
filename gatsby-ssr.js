/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react')

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link key={0} rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ovo|Arvo:700" />,
    <link key={1} rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/3.3.6/css/bootstrap.min.css" />,
    <link key={2} rel="stylesheet" href="https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" />,
  ])
  setPostBodyComponents([
    <script key={0} src="https://cdn.jsdelivr.net/jquery/2.2.4/jquery.min.js" />,
    <script key={4} src="https://cdn.jsdelivr.net/bootstrap/3.3.6/js/bootstrap.min.js" />,
    <script key={5} src="https://cdn.jsdelivr.net/jquery.balancetext/1.6.0/jquery.balancetext.min.js" />,
    <script key={6} src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5T9CPkiuk1eq-BThAm7N6MSlyotrSeN8" />,
  ])
}
