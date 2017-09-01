import React from 'react'
import Header from 'sicario/Header'
import {Button} from 'rebass'

/** Fixed Header click button to show the component with custom*/
export default class ExampleFixedHeaderWithCustom extends React.Component {
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
        {this.state.header && (
          <Header bg="red" logoPx={[3, 4, 5]} logoPy={[4, 4, 4]} />
        )}
      </div>
    )
  }
}
