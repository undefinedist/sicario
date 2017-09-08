import React from 'react'
import PropTypes from 'prop-types'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

function Gallery({images}) {
  return (
    <Carousel
      axis="horizontal"
      showArrows
      showStatus={false}
      showThumbs={false}
      infiniteLoop
      interval={3500}
      dynamicHeight>
      {images.map(image => (
        <div>
          <img src={image} />
        </div>
      ))}
    </Carousel>
  )
}

Gallery.propTypes = {
  images: PropTypes.array,
}

Gallery.defaultProps = {
  images: [
    'http://lorempixel.com/400/300/',
    'http://lorempixel.com/400/300/',
    'http://lorempixel.com/400/300/',
  ],
}

export default Gallery
