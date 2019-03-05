import React from 'react'
import 'antd/dist/antd.css'
import PureComponent from './c3_1/pureComponent'
import HasStatusComponent from './c3_2/hasStatusComponent'
import ToDoApp from './c3_3/toToApp'
export default class BaseComponent extends React.Component {
  render() {
    return (
      <div>
        <PureComponent name="Taylor" />
        <HasStatusComponent />
        <br />
        <ToDoApp />
      </div>
    )
  }
}