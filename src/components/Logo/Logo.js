import React from 'react'
import PropTypes from 'prop-types'
import {Image} from 'rebass'

/** Logo Image button */
function Logo({src}) {
  return <Image style={{height: '36px'}} src={src} />
}

Logo.propTypes = {
  /** src to display */
  src: PropTypes.string,
}

Logo.defaultProps = {
  src: 'http://via.placeholder.com/150x36',
}

export default Logo
