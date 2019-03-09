import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    alert('A name was submitted: ' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <lable>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </lable>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}