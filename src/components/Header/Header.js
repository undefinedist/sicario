import React from 'react'
import PropTypes from 'prop-types'
import {Fixed, Flex, Box, ButtonCircle} from 'rebass'
import Logo from '../Logo'
import Color from 'color'

/** Fixed Header Component */
class Header extends React.Component {
  state = {
    headerBg: 'transparent',
  }

  handleBgColor = () => {
    if (this.props.bg !== 'transparent') {
      const windowHeight = window.innerHeight - 80
      let headerBg = Color(this.props.bg)
        .alpha(window.scrollY / windowHeight)
        .string()
      this.setState({headerBg: headerBg})
    }
  }

  componentWillMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this.handleBgColor)
    }
  }

  render() {
    const {logoSrc, logoWrapper, btnText, btnWrapper, btn} = this.props
    return (
      <Fixed bg={this.state.headerBg} z={100} left top right>
        <Flex justify="space-between" align="center">
          <Box {...logoWrapper}>
            <Logo src={logoSrc} />
          </Box>
          <Box {...btnWrapper}>
            <ButtonCircle {...btn}>{btnText}</ButtonCircle>
          </Box>
        </Flex>
      </Fixed>
    )
  }
}

Header.propTypes = {
  /** Background Color if you want transparent , "transparent" */
  bg: PropTypes.string.isRequired,

  /** Logo source url */
  logoSrc: PropTypes.string.isRequired,
  /** px, py */
  logoWrapper: PropTypes.shape({
    px: PropTypes.array,
    py: PropTypes.array,
  }),

  /** Button Text */
  btnText: PropTypes.string.isRequired,
  /** px, py */
  btnWrapper: PropTypes.shape({
    px: PropTypes.array,
    py: PropTypes.array,
  }),

  /** font-size, color, bg, px  */
  btn: PropTypes.shape({
    fontSize: PropTypes.array,
    color: PropTypes.string,
    bg: PropTypes.string,
    px: PropTypes.array,
  }),
}

Header.defaultProps = {
  logoWrapper: {
    px: [3, 3, 3, 7],
    py: [2, 2, 2, 2],
  },
  btnWrapper: {
    px: [3, 3, 3, 7],
    py: [1, 1, 1, 1],
  },
  btn: {
    fontSize: [1],
    color: 'white',
    bg: 'green',
    px: [5],
  },
}

export default Header
