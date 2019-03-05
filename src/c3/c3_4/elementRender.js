import React, { Component } from 'react'

export default class ElementRender extends Component {
  constructor(props) {
    super(props)
    this.state = { newDate: '' }
  }

  tick() {
    this.setState({
      newDate: new Date().toLocaleTimeString()
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <h1>it is {this.state.newDate}</h1>
      </div>
    )
  }
}