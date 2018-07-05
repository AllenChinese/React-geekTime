import React from "react";
import axios from 'axios';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import CommentList from './CommentList'

export default class CommentBox extends React.PureComponent {
  async addOne() {
    axios.post('http://192.168.218.190:7001/api/v1/posts', {
      id: 5,
      age: 12,
      address: '上海陆家嘴'
    }).then(function (res) {

    })
  }

  async updateOne() {
    const id = 1
    axios.put('http://192.168.218.190:7001/api/v1/posts/:' + id, {
      id: id,
      age: 66,
      address: '北京王府井'
    }).then(function (res) {

    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.addOne.bind(this)}>add one</Button>
        <Button>delete one</Button>
        <Button type="dashed" onClick={this.updateOne.bind(this)}>update one</Button>
        <br /><br />
        <CommentList />
      </div>
    )
  }
}
