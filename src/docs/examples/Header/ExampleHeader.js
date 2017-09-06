import React from 'react'
import Header from 'sicario/Header'
import {Button} from 'rebass'

/** Fixed Header click button to show the component*/
export default class ExampleHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {header: false}
  }

  render() {
    return (
      <div style={{height: '1500px'}}>
        <Button
          onClick={() => this.setState({header: !this.state.header})}
          children="Toggle Fixed"
        />
        {this.state.header && (
          <Header bg="blue" logoSrc="http://via.placeholder.com/150x60" btnText="예약하기" />
        )}
      </div>
    )
  }
}
