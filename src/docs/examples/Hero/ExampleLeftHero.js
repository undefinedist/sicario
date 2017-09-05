import React from 'react'
import Hero from 'sicario/Hero'

/** With a custom message: */
export default function ExampleLeftHero() {
  return (
    <Hero
      title={{titleText: 'hello\nworlo\nfjlf', titleSizes: [5, 5, 6, 6]}}
      contentLoc="left"
      backgroundImage="http://via.placeholder.com/1080x900"
    />
  )
}
