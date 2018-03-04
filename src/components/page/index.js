import React from 'react'

export default ({ title, children }) => (
  <div className="panel panel-default">
    <div className="panel-heading">
      <h1>{title}</h1>
    </div>
    <div className="panel-body">{children}</div>
  </div>
)
