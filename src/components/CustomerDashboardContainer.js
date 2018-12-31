import React from 'react'
import CustomerGeneralInfo from './CustomerGeneralInfo'
import CustomerSalesGoalInfo from './CustomerSalesGoalInfo'
import CustomerProductSalesInfo from './CustomerProductSalesInfo'
import CustomerNotesContainer from './CustomerNotesContainer'
import { connect } from 'react-redux'

const CustomerDashboardContainer = (props) => {

  return(
    <div>
      <div className='customer-dashboard-header'>
        <h1>
          {props.viewThisCustomer.name} Sales Dashboard
        </h1>
      </div>
      <br />
      <CustomerGeneralInfo />
      <CustomerSalesGoalInfo />
      <CustomerProductSalesInfo />
      <CustomerNotesContainer />
    </div>
  )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer
})


export default connect(mapStateToProps)(CustomerDashboardContainer)
