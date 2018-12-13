import React, { Component } from 'react'
import ViewOrCreate from './ViewOrCreate'
import OrderForm from './OrderForm'
import Dashboard from './Dashboard'
import CategorySelector from './CategorySelector'

const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'
const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

class MainContainer extends Component {

  state = {
    createOrder: false,
    openDashboard: false,
    customers: [],
    products: []
  }

  handleCreateOrder = () => {
    this.setState({
      createOrder: true
    })
  }

  handleOpenDashboard = () => {
    this.setState({
      openDashboard: true
    })
  }

  handleViewProducts

  getCustomers = () => {
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        this.setState({
          customers: customers
        }, () => console.log(customers))
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

  renderContent = () => {
    if (this.state.createOrder === true) {
      return <OrderForm />
    } else if (this.state.openDashboard === true) {
      return <Dashboard customers={this.state.customers}/>
    } else if (this.props.viewProducts === true) {
      return <CategorySelector products={this.state.products}/>
    } else {
      return <ViewOrCreate handleCreateOrder={this.handleCreateOrder} handleOpenDashboard={this.handleOpenDashboard}/>
    }
  }

  render(){

    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }

}


export default MainContainer
