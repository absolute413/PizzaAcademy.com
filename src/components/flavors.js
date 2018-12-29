import React, { Fragment } from 'react'

import { flavors } from '../../content/flavors.yaml'

export default () => (
  <Fragment>
    <div className="flavors-board">
      <h3 className="flavors-header">Ice Cream</h3>
      <em>House Made &mdash; by the pint</em>

      {flavors.map((flavor, idx) => (
        <div key={idx} className="flavors-item">
          <h4>{flavor.name}</h4>
        </div>
      ))}
    </div>
  </Fragment>
)
