import React from 'react'
import MultiLineText from 'sicario/MultiLineText'

/** With a custom message: */
/** if you Use multi line pass to props in string need to wrap with {} ex
  * multiLineText={'text'} */
export default function ExampleLeMultiLineText() {
  return (
    <MultiLineText multiLineText={'hhelelhl\njfldsj\n'} keyPrefix="multi" />
  )
}
