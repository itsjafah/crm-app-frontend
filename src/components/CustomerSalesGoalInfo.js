import React from 'react'
import { connect } from 'react-redux'

const CustomerSalesGoalInfo = (props) => {

  return(
    <div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    viewThisCustomer: state.viewThisCustomer,
    orders: state.orders
})


export default connect(mapStateToProps)(CustomerSalesGoalInfo)
