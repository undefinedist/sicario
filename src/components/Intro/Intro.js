import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'
import MultiLineText from '../MultiLineText'

/** Intro */
function Intro({
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
    <Flex style={{textAlign: 'center'}} wrap px={contentPx}>
      <Box width={[1]}>
        <MultiLineText
          multiLineText={titleText}
          f={titleSizes}
          color={titleColor}
          bold={titleBold}
          pb={titlePb}
        />
      </Box>
      <Box width={[1]}>
        <MultiLineText
          multiLineText={descriptionText}
          f={descriptionSizes}
          color={descriptionColor}
          bold={descriptionBold}
          pb={descriptionPb}
        />
      </Box>
    </Flex>
  )
}

Intro.propTypes = {
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

Intro.defaultProps = {
  contentPx: [1, 3, 4, 4],
  title: {
    titleText: 'SKYWINGS PARAGLIDING',
    titleSizes: [6],
    titleColor: 'black',
    titleBold: 'normal',
    titlePb: [10, 3, 3],
  },
  description: {
    descriptionText:
      '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 신뢰와 안전, 그리고 실시간 한국어 예약서비스까지. 스카이윙즈는 최고의 고객서비스를 선사합니다 !\n \n 담당 파일럿이 본인 하네스에 카메라를 부착해드립니다. 휴대폰과 대형 카메라는 비행 중 탈락 시 대형 사고의 위험이 있어 휴대가 금지됩니다. 위 물품들을 이륙장소에 가지고 오시는 경우, 비행동안 안전하게 보관해드립니다. 선택 사항으로 HD퀄리티의 사진과 동영상 서비스를 제공합니다. 여러분의 환상적인 추억을 USB에 담아드립니다.',
    descriptionSizes: [3],
    descriptionColor: 'black',
    descriptionBold: 'normal',
    descriptionPb: [10],
  },
}

export default Intro