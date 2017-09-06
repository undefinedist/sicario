import React from 'react'
import PropTypes from 'prop-types'
import {Embed} from 'rebass'

/** Embed Video
  * Need Wrapper to control the size */
function EmbedVideo({width, height, src}) {
  return (
    <Embed>
      <iframe src={src} frameBorder="0" allowFullScreen />
    </Embed>
  )
}

EmbedVideo.propTypes = {
  /** url */
  src: PropTypes.string,
}

EmbedVideo.defaultProps = {
  src: 'https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1',
}

export default EmbedVideo
