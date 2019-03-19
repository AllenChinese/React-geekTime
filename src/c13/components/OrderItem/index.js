import React, { Component } from 'react'
import './index.css'


class OrderItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stars: props.item.stars || 0,
      editing: false,
      comment: props.item.evaluteContent || ''
    }
  }

  editArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          onChange={this.handleCommentChange}
          value={this.state.comment}
        />
        {this.star()}
        <button
          className="orderItem__btn"
          onClick={this.handleSubmitComment}
        >提交</button>&nbsp;
        <button
          className="orderItem__btn active"
          onClick={this.handleCancelComment}
        >取消</button>
      </div>
    )
  }

  star() {
    const { stars } = this.state
    return (
      <div className="orderItem__star">
        {
          [1, 2, 3, 4, 5].map((item, index) => {
            const light = stars >= item ?
              'orderItem__star--light' :
              ''
            return (
              <span
                key={index}
                className={light}
                onClick={this.handleClickStars.bind(this, item)}
              >☆</span>
            )
          })
        }
      </div >
    )
  }

  handleOpenEditArea = () => {
    this.setState({
      editing: true
    })
  }

  handleCommentChange = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  handleClickStars = (stars) => {
    this.setState({
      stars: stars
    })
  }

  handleCancelComment = () => {
    this.setState({
      editing: false,
      stars: this.props.item.stars || 0,
      comment: this.props.item.evaluteContent || ''
    })
  }

  handleSubmitComment = () => {
    const { id } = this.props.item
    const { comment, stars } = this.state
    this.setState({
      editing: false
    })

    this.props.onSubmit(id, comment, stars)
  }

  render() {
    const item = this.props.item
    return (
      <div className="orderItem">
        <div className="orderItem__container">
          <div className="orderItem__picContainer">
            <img src={item.pic} className="orderItem__pic" alt="" />
          </div>
          <div className="orderItem__content">
            <div className="orderItem__product">{item.title}</div>
            <div className="orderItem__shop">{item.shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">${item.price}</div>
              <div>
                <button className={item.isEvaluate ? 'orderItem__btn active disabled' : 'orderItem__btn'} onClick={this.handleOpenEditArea}>评价</button>
              </div>
            </div>
          </div>
        </div>
        {this.state.editing ? this.editArea() : null}
      </div>
    )
  }
}

export default OrderItem


