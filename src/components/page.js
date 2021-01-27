import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default ({ title, children, className, ...props }) => (
  <Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className={`panel panel-default ${className}`} {...props}>
      <div className="panel-heading">
        <h1>{title}</h1>
      </div>
      <div className="panel-body">{children}</div>
    </div>
  </Fragment>
)
