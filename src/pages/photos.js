import React from 'react'
import Layout from '../components/layout'

import Page from '../components/page'
import Gallery from '../components/gallery'

export default ({ location }) => (
  <Layout location={location}>
    <Page title="Photos">
      <Gallery album="606796236030457" />
    </Page>
  </Layout>
)
