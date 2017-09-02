import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'rebass'

/** wrapper for rebass Text component for multi line */
const MultiLineText = ({multiLineText, keyPrefix, ...rest}) => {
  return (
    <div>
      {multiLineText.split(/\r\n|\n|\r/).map((text, index) => (
        <Text {...rest} key={`${keyPrefix}-${index}`}>
          {text}
        </Text>
      ))}
    </div>
  )
}

MultiLineText.propTypes = {
  multiLineText: PropTypes.string,
  keyPrefix: PropTypes.string,
}

export default MultiLineText
