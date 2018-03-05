import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ title, children }) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="panel panel-default">
      <div className="panel-heading">
        <h1>{title}</h1>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  </Fragment>
)
