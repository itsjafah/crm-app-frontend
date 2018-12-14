import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'

const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'
const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

class App extends Component {

  state = {
    viewProducts: false,
    createOrder: false,
    openDashboard: false,
    customers: [],
    products: []
  }

  handleViewProducts = () => {
    this.setState({
      viewProducts: true,
      openDashboard: false,
      createOrder: false
    })
  }

  handleCreateOrder = () => {
    this.setState({
      createOrder: true,
      viewProducts: false,
      openDashboard: false
    })
  }

  handleOpenDashboard = () => {
    this.setState({
      openDashboard: true,
      viewProducts: false,
      createOrder: false
    })
  }

  getCustomers = () => {
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        this.setState({
          customers: customers.customers
        }, () => console.log(customers.customers))
      })
  }

  getProducts = () => {
    fetch(PRODUCTS_API)
      .then(r => r.json())
      .then( products => {
        this.setState({
          products: products
        })
      })
  }

  componentDidMount(){
    this.getCustomers()
    this.getProducts()
  }

  render() {
    return (
      <div className="App">
        <Header
          handleViewProducts={this.handleViewProducts}
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}/>
        <MainContainer
          viewProducts={this.state.viewProducts}
          createOrder={this.state.createOrder}
          openDashboard={this.state.openDashboard}
          customers={this.state.customers}
          products={this.state.products}
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}/>
      </div>
    );
  }
}

export default App;
