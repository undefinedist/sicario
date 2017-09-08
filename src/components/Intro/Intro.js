import React from 'react'
import PropTypes from 'prop-types'
import {Flex, Box} from 'rebass'
import MultiLineText from '../MultiLineText'

/** Intro */
function Intro({introWrapper, titleText, title, descriptionText, description}) {
  return (
    <Flex {...introWrapper} style={{margin: '0 auto', textAlign: 'center', maxWidth: '850px'}} wrap>
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
  introWrapper: {
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
  introWrapper: {
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
/*
    titleText: 'SKYWINGS PARAGLIDING',
    descriptionText:
      '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 신뢰와 안전, 그리고 실시간 한국어 예약서비스까지. 스카이윙즈는 최고의 고객서비스를 선사합니다 !\n담당 파일럿이 본인 하네스에 카메라를 부착해드립니다. 휴대폰과 대형 카메라는 비행 중 탈락 시 대형 사고의 위험이 있어 휴대가 금지됩니다. 위 물품들을 이륙장소에 가지고 오시는 경우, 비행동안 안전하게 보관해드립니다. 선택 사항으로 HD퀄리티의 사진과 동영상 서비스를 제공합니다. 여러분의 환상적인 추억을 USB에 담아드립니다.',
      */
