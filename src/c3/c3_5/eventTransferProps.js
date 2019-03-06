import React, { Component } from 'react'

export default class EventTransferProps extends Component {
  constructor(props) {
    super(props)
    this.state = { name: 'Hello World' }
    // this.myAlert = this.myAlert.bind(this)
  }

  preventPop(name, e) { // 事件对象e要放在最后
    e.preventDefault()
    alert(name)
  }

  myAlert() {
    alert(this.state.name)
  }

  render() {
    return (
      <div>
        <a
          href="https://reactjs.com"
          onClick={this.preventPop.bind(this, this.state.name)}
        >Click</a>
        <br />
        <span onClick={(e) => this.myAlert(e)}>myAlert</span>
      </div>
    )
  }
}