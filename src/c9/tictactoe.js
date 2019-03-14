import React, { Component } from 'react'
import './index.css'
// 棋格子
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

// 棋盘
class Board extends Component {
  constructor(props) {
    super(props)
    this.gameReset = this.gameReset.bind(this)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }

  gameReset() {
    this.setState({
      squares: Array(9).fill(null)
    })
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <br />
        <button
          className="reset"
          onClick={this.gameReset}
        >重置</button>
      </div>
    )
  }
}

export default class Tictactoe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
          {/* Board */}
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    )
  }
}