import React, { Component } from 'react'
import './index.css'
class OrderItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const item = this.props.item
    return (
      <div className="orderItem">
        <div className="orderItem__picContainer">
          <img src={item.pic} className="orderItem__pic" alt="" />
        </div>
        <div className="orderItem__content">
          <div className="orderItem__product">{item.title}</div>
          <div className="orderItem__shop">{item.shop}</div>
          <div className="orderItem__detail">
            <div className="orderItem__price">${item.price}</div>
            <div>
              <button className={item.isEvaluate ? 'orderItem__btn' : 'orderItem__btn active'}>评价</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderItem


