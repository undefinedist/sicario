import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Flex, Box, Image, Heading, Text} from 'rebass'

const BlogSummaryFlex = styled(Flex).attrs({
  align: props => props.align || 'flex-start',
  bg: props => props.bg || '#dee1e3',
  py: props => props.py || 3,
  px: props => props.px || [1, 2, 3, 4],
  wrap: props => props.wrap || true,
})``

const ImageBox = styled(Box).attrs({
  width: props => props.width || [1, 1, 1, 1 / 3],
})``

const CenteredImage = styled(Image).attrs({
  src: props => props.src || 'http://placekitten.com/g/500/300',
  maxWidth: props => props.maxWidth || '200px',
  my: props => props.my || [1, 3, 3, 8],
  mx: props => props.mx || 'auto',
})`
`

const ContentBox = styled(Box).attrs({
  my: props => props.my || [1, 3, 3, 8],
  px: props => props.px || [1, 2, 3, 4],
  width: props => props.width || [1, 1, 1, 2 / 3],
})``

const ContentHeading = styled(Heading).attrs({
  py: props => props.py || [1, 1, 1, 1],
  fontSize: props => props.fontSize || [4, 4, 4, 4],
  color: props => props.color || '#ea9a4c',
})``

/** Blog Summary */
const BlogSummary = props => {
  const {flex, imageBox, image, contentBox, contentHeading} = props
  return (
    <BlogSummaryFlex {...flex}>
      <ImageBox {...imageBox}>
        <CenteredImage {...image} />
      </ImageBox>
      <ContentBox {...contentBox}>
        <ContentHeading {...contentHeading}>
          hellow world what if the title is really long
        </ContentHeading>
        <Text>THis is reviewTHis is reviewTHis is reviewTHis is review</Text>
        <Flex my={3}>
          <Text bold>날짜</Text>
          <Box mx={1} />
          <Text>12/33</Text>
          <Box mx={1} />
          <Text bold>작성자</Text>
          <Box mx={1} />
          <Text>12/33</Text>
        </Flex>
      </ContentBox>
    </BlogSummaryFlex>
  )
}

BlogSummary.propTypes = {
  /** bg, py, wrap */
  flex: PropTypes.shape({
    bg: PropTypes.string,
    py: PropTypes.array,
    wrap: PropTypes.boolean,
  }),
  /** width */
  imageBox: PropTypes.shape({
    width: PropTypes.array,
  }),
  /** my, src */
  image: PropTypes.shape({
    my: PropTypes.array,
    src: PropTypes.string,
  }),
  contentBox: PropTypes.shape({
    bg: PropTypes.string,
    py: PropTypes.array,
    px: PropTypes.array,
    witdh: PropTypes.array,
  }),
  contentHeading: PropTypes.shape({
    py: PropTypes.array,
    fontSize: PropTypes.array,
    color: PropTypes.string,
  }),
}

BlogSummary.defaultProps = {}

export default BlogSummary
