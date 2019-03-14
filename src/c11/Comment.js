import React from 'react'
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list-component">
      <label>评论列表</label>
      <ul className="list-group mb-3">
        {
          comments.map((comment, index) =>
            <li
              key={index}
              className="list-group-item"
            >
              {comment}
            </li>
          )
        }
      </ul>
    </div>
  )
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    this.props.onAddComment(this.commentInput.value)
    event.preventDefault()
  }
  render() {
    return (
      <form
        className="p-5"
        onSubmit={this.handleSubmit}
      >
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(commentInput) => { this.commentInput = commentInput }}
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
          >留言</button>
          <p>已有{this.props.commentsLength}条评论</p>
        </div>
      </form>
    )
  }
}

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = { commentList: ['this is my first reply'] }
  }

  addComment(comment) {
    console.log(comment)
    this.setState({
      commentList: [...this.state.commentList, comment]
    })
  }

  render() {
    return (
      <div className="comment-component">
        <CommentList comments={this.state.commentList} />
        <CommentBox
          commentsLength={this.state.commentList.length}
          onAddComment={(comment) => this.addComment(comment)} />
      </div>
    )
  }
}