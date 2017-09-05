import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'rebass'

/** wrapper for rebass Text component for multi line */
const MultiLineText = ({multiLineText, keyPrefix, pb, bold, ...rest}) => {
  const splittedTexts = multiLineText.split(/\r\n|\n|\r/)
  const numOfTexts = splittedTexts.length
  const fontWeight = bold === 'bold' ? 700 : bold === 'thin' ? 200 : 400
  return (
    <div>
      {splittedTexts.map((text, index) => {
        return (
          <Text
            style={{lineHeight: 'normal', fontWeight}}
            {...rest}
            key={`${keyPrefix}-${index}`}
            pb={numOfTexts === index + 1 ? pb : null}>
            {text}
          </Text>
        )
      })}
    </div>
  )
}

MultiLineText.propTypes = {
  multiLineText: PropTypes.string,
  keyPrefix: PropTypes.string,
  pb: PropTypes.array,
}

export default MultiLineText
