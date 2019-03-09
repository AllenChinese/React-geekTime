import React, { Component } from 'react'
/**
 * 多输入的解决方案，给每一个元素添加一个 name 属性
 */
export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      isGoing: false,
      numberOfGuests: 2
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const target = e.target
    const name = target.name
    const value =
      target.type === 'checkbox' ?
        target.checked :
        target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    console.log('A name was submitted: ', this.state.firstName + '|' + this.state.isGoing + '|' + this.state.numberOfGuests)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="firstName" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Is Going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange} />
        </label>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}