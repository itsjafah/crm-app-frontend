import React, { Component } from 'react'
import ViewOrCreate from './ViewOrCreate'
import OrderForm from './OrderForm'
import Dashboard from './Dashboard'

const CUSTOMERS_API = 'http://localhost:3000/customers'

class MainContainer extends Component {

  state = {
    createOrder: false,
    openDashboard: false,
    customers: []
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

  componentDidMount(){
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        this.setState({
          customers: customers
        })
      })
  }

  renderContent = () => {
    if (this.state.createOrder === true) {
      return <OrderForm />
    } else if (this.state.openDashboard === true) {
      return <Dashboard customers={this.state.customers}/>
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
