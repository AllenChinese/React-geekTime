import React, { Component } from 'react'
class UserGreeting extends Component {
  render() {
    return (
      <h1>Welcome back!</h1>
    )
  }
}

class GuestGreeting extends Component {
  render() {
    return (
      <h1>Please Sign Up</h1>
    )
  }
}

export default class GreeingChild extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    let ele = this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    return (
      ele
    )
  }
}