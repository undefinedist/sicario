import React from 'react'
import Hero from 'sicario/Hero'

/** With a custom message: */
export default function ExampleLeftHero() {
  return (
    <Hero
      message="hello hero"
      messageLoc="left"
      backgroundImage="http://via.placeholder.com/1080x900"
    />
  )
}
