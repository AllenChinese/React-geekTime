import React from 'react'
import ThemeContext from '../theme-context'
import ThemedBar from './themedBar'
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },

  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}

export default class MyContext extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div>
          <h1 className="app-title">welcome to React</h1>
          <ThemedBar />
          <a
            href="#theme-switcher"
            className="btn btn-light"
            onClick={() => this.changeTheme('light')}
          >
            浅色主题
          </a>
          <a
            href="#theme-switcher"
            className="btn btn-secondary"
            onClick={() => this.changeTheme('dark')}
          >
            深色主题
          </a>
        </div>
      </ThemeContext.Provider>
    )
  }
}