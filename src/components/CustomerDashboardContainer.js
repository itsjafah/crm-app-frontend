import React from 'react'
import CustomerGeneralInfo from './CustomerGeneralInfo'
import CustomerSalesGoalInfo from './CustomerSalesGoalInfo'
import CustomerProductSalesInfo from './CustomerProductSalesInfo'
import CustomerNotesContainer from './CustomerNotesContainer'
import CreateCustomerNoteContainer from './CreateCustomerNoteContainer'

const CustomerDashboardContainer = (props) => {

  return(
    <div>
      <br />
      <CustomerGeneralInfo />
      <CustomerSalesGoalInfo />
      <CustomerProductSalesInfo />
      <CustomerNotesContainer />
      <CreateCustomerNoteContainer />
    </div>
  )
}


export default CustomerDashboardContainer
