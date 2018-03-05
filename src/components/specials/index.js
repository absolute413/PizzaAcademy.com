import React, { Fragment } from 'react'

import { specials } from '../../../content/specials.yaml'

export default () => (
  <Fragment>
    <div className="specials-board">
      <h3 className="specials-header">Specials</h3>

      {specials.map((special, idx) => (
        <div key={idx} className="specials-item">
          <h4>{special.name}</h4>
          <div className="balance-text">{special.detail}</div>
          <h5>{special.price}</h5>
        </div>
      ))}
    </div>
  </Fragment>
)
