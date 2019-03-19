import React, { Component } from 'react'
import './index.css'
import Header from './components/Header'
import OrderList from './components/OrderList'
class Myorder extends Component {
  render() {
    return (
      <div>
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default Myorder;