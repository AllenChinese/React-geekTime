import React, { Component } from 'react'

function ItemList(props) {
  return (
    <li>{props.value * 2}</li>
  )
}

export default class List extends Component {
  constructor(props) {
    super(props)
    this.numbers = props.numbers
  }

  render() {
    return (
      <ul>
        {this.numbers.map((number) =>
          <ItemList value={number} key={number.toString()} />
        )}
      </ul>
    )
  }
}

