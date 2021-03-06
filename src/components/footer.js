import React from 'react'

import { siteMetadata } from '../../gatsby-config'

export default () => (
  <div className="footer hidden-print">
    {siteMetadata.title} &copy; {new Date().getFullYear()}
    <a href="https://github.com/MadeByGlutard">MadeByGlutard</a>
  </div>
)
