import React from "react";
import axios from 'axios';
import 'antd/dist/antd.css';

export default class CommentList extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    axios.get('http://192.168.218.190:7001/api/v1/posts')
      .then((res) => {
        console.log(res)
        const list = res.data.data.list;
        this.setState({
          list: list
        });
      })
  }

  render() {
    console.log(this.state.list)
    return (
      <div>
        <ul>
          {this.state.list.map(i =>
            <li key={i.id}>
              {'id:' + i.id}&nbsp;
              {'age:' + i.age}&nbsp;
              {'address:' + i.address}
            </li>
          )}
        </ul>
      </div>
    )
  }
}