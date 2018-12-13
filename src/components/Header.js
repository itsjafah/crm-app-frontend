import React, { Component } from 'react'

class Header extends Component {
  
  render(){

    const { handleViewProducts } = this.props

    return(
      <div>
        <button onClick={handleViewProducts}>Products</button>
      </div>
    )
  }
}

export default Header
