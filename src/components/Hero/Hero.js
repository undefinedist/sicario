import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import {Banner, Heading} from 'rebass'
import MultiLineText from '../MultiLineText'

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

const getLocation = contentLoc => {
  let style = {}
  if (contentLoc === 'left') {
    style = {
      alignItems: 'flex-start',
    }
  } else if (contentLoc === 'right') {
    style = {
      alignItems: 'flex-end',
    }
  }
  return style
}

/** Hero */
function Hero({backgroundImage, contentPx, contentLoc, titleSizes, title, textSizes, text}) {
  return (
    <Banner style={getLocation(contentLoc)} backgroundImage={backgroundImage} px={contentPx}>
      <Heading f={titleSizes}>{title}</Heading>
      <MultiLineText multiLineText={text} f={textSizes} />
    </Banner>
  )
}

Hero.propTypes = {
  /** Background Image */
  backgroundImage: PropTypes.string,

  /** padding x axis in array */
  contentPx: PropTypes.array,

  /** content location */
  contentLoc: PropTypes.string,

  /** title size in array */
  titleSizes: PropTypes.array,
  /** title */
  title: PropTypes.string,

  /** text size in array */
  textSizes: PropTypes.array,
  /** text */
  text: PropTypes.string,
}

Hero.defaultProps = {
  text: '',
  contentLoc: 'center',
  titleSizes: [4, 5, 6, 7],
  textSizes: [2, 2, 3, 3],
  contentPx: [1, 3, 4, 4],
}

export default Hero
