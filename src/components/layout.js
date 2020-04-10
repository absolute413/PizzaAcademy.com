import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import '../assets/css/default.css'

import Sidebar from './sidebar'
import Footer from './footer'
import Modals from './modals'

import { siteMetadata } from '../../gatsby-config'

export default ({ location, children }) => {
  return (
    <Fragment>
      <Helmet defaultTitle={siteMetadata.title} titleTemplate={`%s | ${siteMetadata.title}`}>
        <html lang="en" />
        <meta name="description" content={siteMetadata.description} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={siteMetadata.title} />
        <meta name="og:description" content={siteMetadata.description} />
      </Helmet>

      <Sidebar location={location} />
      <div className="content">{children}</div>
      <Footer />
      <Modals />
    </Fragment>
  )
}
