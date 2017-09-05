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
  contentLoc,
  contentPx,
  title: {titleSizes, titleText, titleColor, titleBold, titlePb},
  description: {
    descriptionText,
    descriptionSizes,
    descriptionColor,
    descriptionBold,
    descriptionPb,
  },
}) {
  return (
    <Banner
      backgroundImage={backgroundImage}
      style={{...getLocation(contentLoc), minHeight: '100vh'}}
      px={contentPx}>
      <MultiLineText
        multiLineText={titleText}
        f={titleSizes}
        color={titleColor}
        bold={titleBold}
        pb={titlePb}
      />
      <MultiLineText
        multiLineText={descriptionText}
        f={descriptionSizes}
        color={descriptionColor}
        bold={descriptionBold}
        pb={descriptionPb}
      />
    </Banner>
  )
}

Hero.propTypes = {
  /** Background Image */
  backgroundImage: PropTypes.string,

  /** content location */
  contentLoc: PropTypes.string,

  /** padding x axis in array */
  contentPx: PropTypes.array,

  /** Title */
  title: PropTypes.shape({
    /** text of title */
    titleText: PropTypes.string,
    /** title size in array */
    titleSizes: PropTypes.array,
    /** color of title */
    titleColor: PropTypes.string,
    /** bold for title */
    titleBold: PropTypes.string,
    /** pb for title */
    titlePb: PropTypes.array,
  }),

  /** Description */
  description: PropTypes.shape({
    /** text of description */
    descriptionText: PropTypes.string,
    /** text size in array */
    descriptionSizes: PropTypes.array,
    /** color of description */
    descriptionColor: PropTypes.string,
    /** bold for description */
    descriptionBold: PropTypes.string,
    /** pb for description */
    descriptionPb: PropTypes.array,
  }),
}

Hero.defaultProps = {
  backgroundImage: 'http://via.placeholder.com/1080x900',
  contentLoc: 'left',
  contentPx: [1, 3, 4, 4],
  title: {
    titleText: 'hello\nfun\nrun',
    titleSizes: ['7em'],
    titleColor: 'white',
    titleBold: 'bold',
    titlePb: [10, 3, 3],
  },
  description: {
    descriptionText: 'this world blabhalbhlahblahblahblabhla\ndljfasldjflsakfja\n',
    descriptionSizes: [2, 2, 3, 3],
    descriptionColor: 'white',
    descriptionBold: 'thin',
    descriptionPb: [10],
  },
}

export default Hero
