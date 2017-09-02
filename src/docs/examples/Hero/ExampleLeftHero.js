import React from 'react'
import Hero from 'sicario/Hero'

/** With a custom message: */
export default function ExampleLeftHero() {
  return (
    <Hero
      title="hello title"
      text={'hello\ntext'}
      contentLoc="left"
      backgroundImage="http://via.placeholder.com/1080x900"
    />
  )
}
