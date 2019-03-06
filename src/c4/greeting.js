import React, { Component } from 'react'
import GreeingChild from './greetingChild/greetingChild'

export default class Greeting extends Component {
  render() {
    return (
      <GreeingChild isLoggedIn={false} />
    )
  }
}