import React from 'react'
import CustomerGeneralInfo from './CustomerGeneralInfo'
import CustomerSalesGoalInfo from './CustomerSalesGoalInfo'
import CustomerProductSalesInfo from './CustomerProductSalesInfo'
import CustomerNotesContainer from './CustomerNotesContainer'

const CustomerDashboardContainer = (props) => {

  return(
    <div>
      <br />
      <CustomerGeneralInfo />
      <CustomerSalesGoalInfo />
      <CustomerProductSalesInfo />
      <CustomerNotesContainer />
    </div>
  )
}


export default CustomerDashboardContainer
