import React from 'react'
import PropTypes from 'prop-types'
import {Embed} from 'rebass'

/** Embed Video */
function EmbedVideo({width, height, src}) {
  return (
    <Embed>
      <iframe width={width} height={height} src={src} frameBorder="0" allowFullScreen />
    </Embed>
  )
}

EmbedVideo.propTypes = {
  /** width of the video */
  width: PropTypes.number,
  /** height of the video */
  height: PropTypes.number,
  /** source of the video */
  src: PropTypes.string,
}

EmbedVideo.defaultProps = {
  width: 560,
  height: 315,
  src: 'https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1',
}

export default EmbedVideo
