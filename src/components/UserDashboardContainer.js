import React, { Component } from 'react'
import Sidebar from './Sidebar'

class UserDashboardContainer extends Component {

  render(){
    const { customers } = this.props

    console.log(customers)

    return(
      <div>
        User's aggregate sales Dashboard will appear here
        <Sidebar customers={customers}/>
      </div>
    )
  }
}

export default UserDashboardContainer
