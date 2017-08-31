import React from 'react'
import Header from 'sicario/Header'
import {Button} from 'rebass'

/** Fixed Header click button to show the component*/
export default class ExampleFixedHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {header: false}
  }

  render() {
    return (
      <div>
        <Button
          onClick={() => this.setState({header: !this.state.header})}
          children="Toggle Fixed"
        />
        {this.state.header && <Header bg="#00ffff" />}
      </div>
    )
  }
}
