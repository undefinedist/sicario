import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'
import MultiLineText from '../MultiLineText'

/** Intro */
function Intro({wrapper, titleText, title, descriptionText, description}) {
  return (
    <Flex {...wrapper} style={{margin: '0 auto', textAlign: 'center', maxWidth: '850px'}} wrap>
      <Box width={[1]} my={title.my}>
        <MultiLineText multiLineText={titleText} {...title} />
      </Box>
      <Box width={[1]}>
        <MultiLineText multiLineText={descriptionText} {...description} />
      </Box>
    </Flex>
  )
}

Intro.propTypes = {
  /** px */
  wrapper: {
    px: PropTypes.array,
  },
  /** text of title */
  titleText: PropTypes.string,
  /** font-size, color, bold, my, pb */
  title: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
    my: PropTypes.array,
    pb: PropTypes.array,
  }),

  /** text of description */
  descriptionText: PropTypes.string,
  /** font-size, color, bold, my, ps */
  description: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
    my: PropTypes.array,
    ps: PropTypes.array,
  }),
}

Intro.defaultProps = {
  wrapper: {
    px: [1, 3, 4, 4],
  },
  title: {
    fontSize: [6],
    color: '#ea9a4c',
    bold: 'normal',
    my: [6],
    pb: [0],
  },
  description: {
    fontSize: [2],
    color: '#8e8e8e',
    bold: 'normal',
    my: [3],
    pb: [3],
  },
}

export default Intro
