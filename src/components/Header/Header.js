import React from 'react'
import PropTypes from 'prop-types'
import {Fixed, Flex, Box, Image, ButtonCircle} from 'rebass'

/** Fixed Header Component */
function Header({
  bg,
  logo,
  btnText,
  btnColor,
  btnBg,
  logoPx,
  logoPy,
  btnPx,
  btnPy,
}) {
  return (
    <Fixed bg={bg} z={100} left top right>
      <Flex justify="space-between" align="center">
        <Box px={logoPx} py={logoPy}>
          <Image src={logo} />
        </Box>
        <Box px={btnPx} py={btnPy}>
          <ButtonCircle color={btnColor} bg={btnBg}>
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

  /** logo image height needs to be 40px */
  logo: PropTypes.string,

  /** button text */
  btnText: PropTypes.string,

  /** button text color */
  btnColor: PropTypes.string,

  /** button background color */
  btnBg: PropTypes.string,

  /** logo px */
  logoPx: PropTypes.array,

  /** logo py */
  logoPy: PropTypes.array,

  /** btn px */
  btnPx: PropTypes.array,

  /** btn py */
  btnPy: PropTypes.array,
}

Header.defaultProps = {
  bg: '',
  logo: 'http://via.placeholder.com/200x40',
  btnText: '예약하기',
  btnColor: 'white',
  btnBg: 'green',
  logoPx: [1, 2, 3],
  logoPy: [1, 1, 1],
  btnPx: [1, 2, 3],
  btnPy: [1, 1, 1],
}

export default Header
