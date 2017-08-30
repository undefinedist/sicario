import React from 'react'
import PropTypes from 'prop-types'

/** my super lame compoenent */
function HelloWorld({message}) {
  return (
    <div>
      Hello {message}
    </div>
  )
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string,
}

HelloWorld.defaultProps = {
  message: 'world',
}

export default HelloWorld
