import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import 'assets/css/default.css'

import Sidebar from 'components/sidebar'
import Footer from 'components/footer'
import Modals from 'components/modals'

import { siteMetadata } from '../../gatsby-config'

export default ({ location, children }) => {
  return (
    <Fragment>
      <Helmet defaultTitle={siteMetadata.title} titleTemplate={`%s | ${siteMetadata.title}`}>
        <html lang="en" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={siteMetadata.title} />
      </Helmet>

      <Sidebar location={location} />
      <div className="content">{children()}</div>
      <Footer />
      <Modals />
    </Fragment>
  )
}
