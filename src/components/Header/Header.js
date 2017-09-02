import React from 'react'
import PropTypes from 'prop-types'
import {Fixed, Flex, Box, ButtonCircle} from 'rebass'
import Logo from '../Logo'

/** Fixed Header Component */
function Header({
  bg,
  btn: {btnText, btnColor, btnBg, btnPx, btnPy},
  logo: {logoUrl, logoPx, logoPy},
}) {
  return (
    <Fixed bg={bg} z={100} left top right>
      <Flex justify="space-between" align="center">
        <Box px={logoPx} py={logoPy}>
          <Logo src={logoUrl} />
        </Box>
        <Box px={btnPx} py={btnPy}>
          <ButtonCircle px={5} f={2} color={btnColor} bg={btnBg}>
            {btnText}
          </ButtonCircle>
        </Box>
      </Flex>
    </Fixed>
  )
}

Header.propTypes = {
  /** Background Color */
  bg: PropTypes.string,

  /** button */
  btn: PropTypes.shape({
    /** button text */
    btnText: PropTypes.string,

    /** button text color */
    btnColor: PropTypes.string,

    /** button background color */
    btnBg: PropTypes.string,

    /** btn px */
    btnPx: PropTypes.array,

    /** btn py */
    btnPy: PropTypes.array,
  }),
  /** Logo */
  logo: PropTypes.shape({
    /** logo url */
    logoUrl: PropTypes.string,
    /** logo px */
    logoPx: PropTypes.array,

    /** logo py */
    logoPy: PropTypes.array,
  }),
}

Header.defaultProps = {
  bg: 'white',
  btn: {
    btnText: '예약하기',
    btnColor: 'white',
    btnBg: 'green',
    btnPx: [3, 3, 3, 7],
    btnPy: [1, 1, 1, 1],
  },
  logo: {
    logoUrl: 'http://via.placeholder.com/150x36',
    logoPx: [3, 3, 3, 7],
    logoPy: [2, 2, 2, 2],
  },
}

export default Header
