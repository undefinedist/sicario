import React from 'react'
import PropTypes from 'prop-types'
import {Fixed, Flex, Box, Image, ButtonCircle} from 'rebass'

/** Fixed Header Component */
function Header({bg, logo, btnText, btnColor, btnBg}) {
  return (
    <Fixed bg={bg} z={100} left top right>
      <Flex justify="space-between" align="center">
        <Box px={[1, 2, 3]} py={1}>
          <Image src={logo} />
        </Box>
        <Box px={[1, 2, 3]} py={1}>
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
}

Header.defaultProps = {
  bg: '',
  logo: 'http://via.placeholder.com/200x40',
  btnText: '예약하기',
  btnColor: 'white',
  btnBg: 'green',
}

export default Header
