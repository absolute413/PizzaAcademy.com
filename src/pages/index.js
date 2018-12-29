import React from 'react'

import { siteMetadata } from '../../gatsby-config'

import Hours from 'components/hours'
import Contact from 'components/contact'
import Specials from 'components/specials'
import Flavors from 'components/flavors'

export default () => (
  <div className="row">
    <div className="col-md-6 col-md-push-3">
      <div className="alert alert-info text-center">
        <strong style={{ fontSize: '1.25em' }}>Closed January 1st - Happy New Year!</strong>
      </div>

      <div className="panel panel-default text-center">
        <div className="panel-heading">
          <h1 style={{ fontFamily: 'Arvo', textTransform: 'uppercase' }}>
            {siteMetadata.title}
            <small className="show">{siteMetadata.tagline}</small>
          </h1>
        </div>
        <div className="panel-body">
          <h4>
            <a href="/menu/">View our Menu</a>
          </h4>

          <hr />

          <div className="row">
            <div className="col-sm-6">
              <Hours />
            </div>

            <div className="col-sm-6">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-md-3 col-md-pull-6">
      <Specials />
    </div>

    <div className="col-md-3">
      <Flavors />
    </div>
  </div>
)
