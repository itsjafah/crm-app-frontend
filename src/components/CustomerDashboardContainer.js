import React from 'react'
import CustomerDashboard from './CustomerDashboard'
import CustomerNotesContainer from './CustomerNotesContainer'

const CustomerDashboardContainer = (props) => {

  return(
    <div>
      Customer Dashboard Container
      <br />
      <CustomerDashboard />
      <CustomerNotesContainer />
    </div>
  )
}


export default CustomerDashboardContainer
