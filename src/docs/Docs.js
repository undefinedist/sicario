import React from 'react'
import {Provider} from 'rebass'
import Navigation from './Navigation'
import ComponentPage from './ComponentPage'
import componentData from '../../config/componentData'

export default class Docs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1),
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({route: window.location.hash.substr(1)})
    })
  }

  render() {
    const {route} = this.state
    const component = route
      ? componentData.filter(component => component.name === route)[0]
      : componentData[0]

    return (
      <div>
        <Provider theme={theme}>
          <Navigation components={componentData.map(component => component.name)} />
          <ComponentPage component={component} />
        </Provider>
      </div>
    )
  }
}

const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  weights: [400, 700, 200],
  colors: {
    black: '#000',
    white: '#fff',
  },
  radius: 4,
  font: '-apple-system, BlinkMacSystemFont, sans-serif',
  monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
}
