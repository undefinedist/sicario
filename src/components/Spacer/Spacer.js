import React from 'react'
import PropTypes from 'prop-types'
import {Divider} from 'rebass'

/** Spacer - make space between components */
function Spacer({mys}) {
  return <Divider style={{backgroundColor: 'transparent'}} w={1} my={mys} color="transparent" />
}

Spacer.propTypes = {
  /** margin ys to display */
  mys: PropTypes.array,
}

Spacer.defaultProps = {
  mys: [2, 3, 4, 5],
}

export default Spacer
