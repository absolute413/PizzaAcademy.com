/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react'

import { siteMetadata } from './gatsby-config'

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <meta key={0} name="description" content={siteMetadata.description} />,

    <meta key={1} property="og:site_name" content={siteMetadata.title} />,
    <meta key={2} property="og:description" content={siteMetadata.description} />,

    <link key={3} rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ovo|Arvo:700" />,
    <link key={4} rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/3.3.6/css/bootstrap.min.css" />,
    <link key={5} rel="stylesheet" href="https://cdn.jsdelivr.net/fontawesome/4.6.3/css/font-awesome.min.css" />
  ])
  setPostBodyComponents([
    <script key={0} src="https://cdn.jsdelivr.net/jquery/2.2.4/jquery.min.js" />,
    <script key={4} src="https://cdn.jsdelivr.net/bootstrap/3.3.6/js/bootstrap.min.js" />,
    <script key={5} src="https://cdn.jsdelivr.net/jquery.balancetext/1.6.0/jquery.balancetext.min.js" />,
    <script key={6} src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5T9CPkiuk1eq-BThAm7N6MSlyotrSeN8" />
  ])
}
