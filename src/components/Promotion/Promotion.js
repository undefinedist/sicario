import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Flex, Box} from 'grid-styled'
import MultiLineText from '../MultiLineText'

const ImgBox = styled.img`width: 100%;`

const Promotion = ({
  index,
  titleText,
  descriptionText,
  image,
  title: {titleSizes, titleColor, titleBold, titleMys, titlePbs},
  description: {
    descriptionSizes,
    descriptionColor,
    descriptionBold,
    descriptionMys,
    descriptionPbs,
  },
}) => (
  <Flex wrap p={[1, 1, 1, 4]}>
    <Box w={[1, 1, 1 / 2]} px={2} order={[1, 1, index / 2 === 0 ? 1 : 2]}>
      <ImgBox src={image} alt={`${index}-promo`} />
    </Box>
    <Box w={[1, 1, 1 / 2]} px={2} order={[2, 2, index / 2 === 0 ? 2 : 1]}>
      <MultiLineText
        multiLineText={titleText}
        f={titleSizes}
        color={titleColor}
        bold={titleBold}
        pb={titlePbs}
      />
      <MultiLineText
        multiLineText={descriptionText}
        f={descriptionSizes}
        color={descriptionColor}
        bold={descriptionBold}
        my={descriptionMys}
        pb={descriptionPbs}
      />
    </Box>
  </Flex>
)

Promotion.propTypes = {
  /** Index of promotion */
  index: PropTypes.number,
  /** image url of promotion */
  image: PropTypes.string,
  /** text of title */
  titleText: PropTypes.string,
  /** text of description */
  descriptionText: PropTypes.string,
  /** Title */
  title: PropTypes.shape({
    /** title size in array */
    titleSizes: PropTypes.array,
    /** color of title */
    titleColor: PropTypes.string,
    /** bold for title */
    titleBold: PropTypes.string,
    /** mys for title */
    titleMys: PropTypes.array,
    /** pbs for title */
    titlePbs: PropTypes.array,
  }),

  /** Description */
  description: PropTypes.shape({
    /** text size in array */
    descriptionSizes: PropTypes.array,
    /** color of description */
    descriptionColor: PropTypes.string,
    /** bold for description */
    descriptionBold: PropTypes.string,
    /** mys for description */
    descriptionMys: PropTypes.array,
    /** pbs for description */
    descriptionPbs: PropTypes.array,
  }),
}

Promotion.defaultProps = {
  image: '',
  index: 1,
  titleText: '',
  descriptionText: '',
  title: {
    titleSizes: [6],
    titleColor: '#ea9a4c',
    titleBold: 'normal',
    titleMys: [6],
    titlePbs: [0],
  },
  description: {
    descriptionSizes: [2],
    descriptionColor: '#8e8e8e',
    descriptionBold: 'normal',
    descriptionMys: [3],
    descriptionPbs: [3],
  },
}

export default Promotion
