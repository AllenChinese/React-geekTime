import React, { Component } from 'react'
import GreeingChild from './greetingChild/greetingChild'
import List from './list/list'

export default class Greeting extends Component {
  render() {
    return (
      <div>
        <GreeingChild isLoggedIn={false} />
        <List numbers={[1, 2, 3, 4, 5]} />
      </div>
    )
  }
}