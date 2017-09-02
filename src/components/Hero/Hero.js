import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import {Banner, Heading} from 'rebass'

/* styled-component extending is now working
const ExtenedBanner = styled(Banner).attrs({
  alignItems: props => props.alignItems || 'center',
  justifyContent: props => props.justifyContent || 'center',
  minHeight: props => props.minHeight || '100vh',
})`
  align-items:  ${props => props.alignItems}
  justify-content:  ${props => props.justifyContent}
  min-height:  ${props => props.minHeight}
`
*/

const getLocation = messageLoc => {
  let style = {}
  if (messageLoc === 'left') {
    style = {
      alignItems: 'flex-start',
    }
  } else if (messageLoc === 'right') {
    style = {
      alignItems: 'flex-end',
    }
  }
  return style
}

/** Hero */
function Hero({backgroundImage, message, messageLoc, messageSizes, px}) {
  return (
    <Banner
      style={getLocation(messageLoc)}
      backgroundImage={backgroundImage}
      px={px}>
      <Heading f={messageSizes}>{message}</Heading>
    </Banner>
  )
}

Hero.propTypes = {
  /** Background Image */
  backgroundImage: PropTypes.string,
  /** message */
  message: PropTypes.string,
  /** message location */
  messageLoc: PropTypes.string,
  /** message size in array */
  messageSizes: PropTypes.array,
  /** padding x axis in array */
  px: PropTypes.array,
}

Hero.defaultProps = {
  message: 'world',
  messageLoc: 'center',
  messageSizes: [4, 5, 6, 7],
  px: [1, 3, 4, 4],
}

export default Hero
