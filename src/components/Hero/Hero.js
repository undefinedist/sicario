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
  title: {titleSizes, titleText, titleColor, titleBold, titlePb},
  description: {
    descriptionSizes,
    descriptionText,
    descriptionColor,
    descriptionBold,
    descriptionPb,
  },
}) {
  return (
    <Banner
      style={{...getLocation(contentLoc), minHeight: '100vh'}}
      backgroundImage={backgroundImage}
      px={contentPx}>
      <MultiLineText
        bold={titleBold}
        f={titleSizes}
        multiLineText={titleText}
        color={titleColor}
        pb={titlePb}
      />
      <MultiLineText
        bold={descriptionBold}
        f={descriptionSizes}
        multiLineText={descriptionText}
        color={descriptionColor}
        pb={descriptionPb}
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

  /** Title */
  title: PropTypes.shape({
    /** title size in array */
    titleSizes: PropTypes.array,
    /** text of title */
    titleText: PropTypes.string,
    /** color of title */
    titleColor: PropTypes.string,
    /** bold for title */
    titleBold: PropTypes.bool,
    /** pb for title */
    titlePb: PropTypes.array,
  }),

  /** Description */
  description: PropTypes.shape({
    /** text size in array */
    descriptionSizes: PropTypes.array,
    /** text of description */
    descriptionText: PropTypes.string,
    /** color of description */
    descriptionColor: PropTypes.string,
    /** bold for description */
    descriptionPb: PropTypes.array,
  }),
}

Hero.defaultProps = {
  contentLoc: 'center',
  contentPx: [1, 3, 4, 4],
  title: {
    titleSizes: ['7em'],
    titleText: 'hello\nfun\nrun',
    titleColor: 'white',
    titleBold: true,
    titlePb: [10, 3, 3],
  },
  description: {
    descriptionSizes: [2, 2, 3, 3],
    descriptionText: 'this world blabhalbhlahblahblahblabhla\ndljfasldjflsakfja\n',
    descriptionColor: 'white',
    descriptionBold: false,
    descriptionPb: [10],
  },
}

export default Hero
