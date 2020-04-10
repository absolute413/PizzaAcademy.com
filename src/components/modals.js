import React, { Fragment } from 'react'

import Specials from './specials'
import Flavors from './flavors'
import Hours from './hours'
import Contact from './contact'
import Location from './location'

export default () => (
  <Fragment>
    <div className="modal fade" id="specials">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body" style={{ padding: 0 }}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{
                marginTop: '8px',
                marginRight: '13px',
                color: '#fff',
                opacity: 0.8,
              }}
            >
              &times;
            </button>
            <Specials />
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="flavors">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body" style={{ padding: 0 }}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{
                marginTop: '8px',
                marginRight: '13px',
                color: '#fff',
                opacity: 0.8,
              }}
            >
              &times;
            </button>
            <Flavors />
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="hours">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body" style={{ paddingTop: 0 }}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{
                marginTop: '-8px',
                marginRight: '-13px',
              }}
            >
              &times;
            </button>
            <Hours />
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="contact">
      <div className="modal-dialog modal-sm">
        <div className="modal-content">
          <div className="modal-body" style={{ paddingTop: 0 }}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{
                marginTop: '-8px',
                marginRight: '-13px',
              }}
            >
              &times;
            </button>
            <Contact />
          </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="location">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body" style={{ paddingTop: 0 }}>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              style={{
                marginTop: '-8px',
                marginRight: '-13px',
              }}
            >
              &times;
            </button>
            <Location />
          </div>
        </div>
      </div>
    </div>
  </Fragment>
)
