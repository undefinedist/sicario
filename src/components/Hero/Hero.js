import React from 'react'
import PropTypes from 'prop-types'
//import styled from 'styled-components'
import {Banner} from 'rebass'
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
function Hero({
  backgroundImage,
  contentPx,
  contentLoc,
  bold,
  title: {titleSizes, titleText, titleColor},
  description: {descriptionSizes, descriptionText, descriptionColor},
}) {
  return (
    <Banner
      style={{...getLocation(contentLoc), minHeight: '100vh'}}
      backgroundImage={backgroundImage}
      px={contentPx}>
      <MultiLineText bold={bold} f={titleSizes} multiLineText={titleText} color={titleColor} />
      <MultiLineText
        bold={bold}
        f={descriptionSizes}
        multiLineText={descriptionText}
        color={descriptionColor}
      />
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

  /** bold for title and description */
  bold: PropTypes.bool,

  /** Title */
  title: PropTypes.shape({
    /** title size in array */
    titleSizes: PropTypes.array,
    /** text of title */
    titleText: PropTypes.string,
    /** color of title */
    titleColor: PropTypes.string,
  }),

  /** Description */
  description: PropTypes.shape({
    /** text size in array */
    descriptionSizes: PropTypes.array,
    /** text of description */
    descriptionText: PropTypes.string,
    /** color of description */
    descriptionColor: PropTypes.string,
  }),
}

Hero.defaultProps = {
  contentLoc: 'center',
  contentPx: [1, 3, 4, 4],
  bold: true,
  title: {
    titleSizes: [4, 5, 6, 7],
    titleText: 'hello',
    tilteColor: 'black',
  },
  description: {
    descriptionSizes: [2, 2, 3, 3],
    descriptionText: 'world',
    descriptionColor: 'black',
  },
}

export default Hero
