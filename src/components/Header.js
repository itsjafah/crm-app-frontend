import React, { Component } from 'react'

class Header extends Component {

  render(){

    const { handleViewProducts, handleOpenDashboard, handleCreateOrder } = this.props

    return(
      <div>
        <button
          className="view-create-button"
          onClick={handleOpenDashboard}>Open Dashboard</button>
        <button onClick={handleViewProducts}>Products</button>
        <button
          className="view-create-button"
          onClick={handleCreateOrder}>Create Order</button>
      </div>
    )
  }
}

export default Header
