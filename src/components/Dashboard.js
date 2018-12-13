import React, { Component } from 'react'
import Sidebar from './Sidebar'

class Dashboard extends Component {

  render(){
    const { customers } = this.props

    console.log(customers)

    return(
      <div>
        <Sidebar customers={customers}/>
      </div>
    )
  }
}

export default Dashboard
