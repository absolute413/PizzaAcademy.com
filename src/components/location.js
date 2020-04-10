import React, { Component, Fragment } from 'react'

import { siteMetadata } from '../../gatsby-config'

class Location extends Component {
  componentDidMount() {
    if (!this.node) return
    if (this.Map && this.Marker && this.InfoWindow) return

    this.Map = new google.maps.Map(this.node, {
      zoom: 14,
      center: new google.maps.LatLng(42.982, -70.961426),
      scrollwheel: false,
      disableDefaultUI: true,
    })

    this.Marker = new google.maps.Marker({
      map: this.Map,
      position: new google.maps.LatLng(42.978998, -70.961426),
      title: siteMetadata.title,
    })

    this.InfoWindow = new google.maps.InfoWindow({
      map: this.Map,
      anchor: this.Marker,
      content: `
        ${siteMetadata.title} &middot; ${siteMetadata.tagline}
        <br />
        ${siteMetadata.description}
        <br />
        159 Front St, Exeter NH, 03833
      `,
    })
  }

  render() {
    return (
      <Fragment>
        <h4 className="text-center">Location</h4>

        <div className="embed-responsive">
          <div className="embed-responsive-item location-map" ref={(node) => (this.node = node)} />
        </div>
      </Fragment>
    )
  }
}

export default Location
