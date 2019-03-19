import React, { Component } from 'react'
import './index.css'
import OrderItem from '../OrderItem'
class OrderList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderList: [
        {
          id: 1,
          pic: require('../../../assets/images/img1.jpg'),
          title: '西红柿🍅',
          shop: '外婆家',
          price: 30,
          isEvaluate: true,
          evaluteContent: '',
          stars: 0
        }, {
          id: 2,
          pic: require('../../../assets/images/img2.jpg'),
          title: '好的的辣椒',
          shop: '新白鹿',
          price: 40,
          isEvaluate: false,
          evaluteContent: '',
          stars: 0
        }, {
          id: 3,
          pic: require('../../../assets/images/img3.jpg'),
          title: '膨化食品',
          shop: '喵记',
          price: 38,
          isEvaluate: false,
          evaluteContent: '',
          stars: 0
        }, {
          id: 4,
          pic: require('../../../assets/images/img4.jpg'),
          title: '鲜花',
          shop: '每日鲜花家',
          price: 120,
          isEvaluate: false,
          evaluteContent: '',
          stars: 0
        }, {
          id: 5,
          pic: require('../../../assets/images/img4.jpg'),
          title: '鲜花1',
          shop: '每日鲜花家1',
          price: 120,
          isEvaluate: false,
          evaluteContent: '',
          stars: 0
        },
      ]
    }
  }

  handleSubmit = (id, comment, stars) => {
    const newOrderList = this.state.orderList.map(item => {
      return item.id === id ?
        {
          ...item,
          evaluteContent: comment,
          stars,
          isEvaluate: true
        } : item
    })
    console.log(newOrderList)
    this.setState({
      orderList: newOrderList
    })
  }

  render() {
    return (
      <div className="orderList">
        {
          this.state.orderList.map(item =>
            <OrderItem
              key={item.id}
              item={item}
              onSubmit={this.handleSubmit} />
          )
        }
      </div>
    );
  }
}

export default OrderList