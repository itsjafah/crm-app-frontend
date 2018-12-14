import React, { Component } from 'react'
import OrderForm from './OrderForm'
import Dashboard from './Dashboard'
import CategorySelector from './CategorySelector'

class MainContainer extends Component {

  renderContent = () => {

    const { viewProducts, createOrder, openDashboard, customers, products } = this.props

    if (createOrder === true) {
      return <OrderForm />
    } else if (openDashboard === true ) {
      return <Dashboard customers={customers}/>
    } else if (viewProducts === true && products !== undefined) {
      return <CategorySelector products={products}/>
    } else {
      return "login page soon"
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
