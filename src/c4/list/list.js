import React, { Component } from 'react'

export default class List extends Component {
  constructor(props) {
    super(props)
    const numbers = props.numbers
  }

  render() {
    return (
      <ul>
        {this.numbers.map((number) =>
          <li key={number.toString()}>{number}</li>
        )}
      </ul>
    )
  }
}