import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { map, filter, sortBy } from 'lodash'

function getPhotos(album) {
  const query = { fields: 'name,images', limit: 100, access_token: '1820160931538945|lMcdsMOGR_MH0bHe4GuHlBuhrdo' }
  return $.ajax('https://graph.facebook.com/' + album + '/photos', { data: query }).then(json => {
    return map(json.data, photo => {
      const images = filter(sortBy(photo.images, 'width'), image => image.width >= 240)
      return { name: photo.name || '', picture: images[0].source }
    })
  })
}

class Gallery extends Component {
  static propTypes = {
    album: PropTypes.string,
    className: PropTypes.string
  }

  state = {}

  componentDidMount() {
    getPhotos(this.props.album).then(photos => this.setState({ photos }))
  }

  render() {
    const { album, className, ...props } = this.props
    const { photos } = this.state

    return (
      <div className={`photo-gallery ${className}`} {...props}>
        {photos ? (
          <div className="row">
            {map(photos, ({ name, picture }, idx) => (
              <div key={idx} className="col-md-3 col-sm-4">
                <div className="panel panel-default">
                  <div className="panel-body">
                    <figure className="embed-responsive embed-square" style={{ backgroundImage: `url(${picture})` }}>
                      <h4>{name}</h4>
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span>Loading...</span>
        )}
      </div>
    )
  }
}

export default Gallery
