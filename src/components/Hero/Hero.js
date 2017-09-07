import React from 'react'
import PropTypes from 'prop-types'
import {Banner} from 'rebass'
import MultiLineText from '../MultiLineText'

/** Hero */
function Hero(props) {
  const {backgroundImage, contentWrapper, titleText, title, descriptionText, description} = props
  const {alignItems, px} = contentWrapper
  return (
    <Banner backgroundImage={backgroundImage} style={{alignItems}} px={px}>
      <MultiLineText multiLineText={titleText} {...title} />
      <MultiLineText multiLineText={descriptionText} {...description} />
    </Banner>
  )
}

Hero.propTypes = {
  /** Background Image */
  backgroundImage: PropTypes.string.isRequired,
  /** alignItems(flex-start, center, flex-end), px*/
  contentWrapper: PropTypes.shape({
    /** conent location */
    alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
    px: PropTypes.array,
  }),

  /** text of title */
  titleText: PropTypes.string.isRequired,
  /** fontSize, color, bold, pb*/
  title: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
    pb: PropTypes.array,
  }),

  /** text of description */
  descriptionText: PropTypes.string.isRequired,
  /** fontSize, color, bold, pb*/
  description: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bold: PropTypes.string,
    pb: PropTypes.array,
  }),
}

Hero.defaultProps = {
  backgroundImage: 'http://via.placeholder.com/1080x900',
  contentWrapper: {
    alignItems: 'flex-start',
    px: [3, 3, 100, 300],
  },
  title: {
    fontSize: ['7em'],
    color: 'white',
    bold: 'bold',
    pb: [10, 3, 3, 3],
  },
  description: {
    fontSize: [2, 2, 3, 3],
    color: 'white',
    bold: 'thin',
    pb: [10],
  },
}

export default Hero
