import React from 'react'
export default class DigitalClock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentDidUpdate(currentProps, currentState) {
    console.log(currentState)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const clockStyle = {
      width: '300px',
      height: '180px',
      background: '#d2d2d2'
    }
    return (
      <div
        className="digital-clock-component"
        style={clockStyle}
      >
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}