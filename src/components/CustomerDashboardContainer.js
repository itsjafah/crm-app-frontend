import React from 'react'
import CustomerDashboard from './CustomerDashboard'
import CustomerNotesContainer from './CustomerNotesContainer'
import CreateCustomerNoteContainer from './CreateCustomerNoteContainer'

const CustomerDashboardContainer = (props) => {

  return(
    <div>
      <br />
      <CustomerDashboard />
      <CustomerNotesContainer />
      <CreateCustomerNoteContainer />
    </div>
  )
}


export default CustomerDashboardContainer
