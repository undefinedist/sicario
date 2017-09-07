import React from 'react'
import Hero from 'sicario/Hero'

/** text has to be wrapped in {'text'} for escape chareacters to be recognized */
export default function ExampleHero() {
  return (
    <Hero
      titleText={'hello\nfun\nrun'}
      descriptionText={'this world blabhalbhlahblahblahblabhla\ndljfasldjflsakfja\n'}
    />
  )
}
