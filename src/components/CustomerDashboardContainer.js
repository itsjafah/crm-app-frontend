import React from 'react'
import { connect } from 'react-redux'

const CustomerDashboardContainer = (props) => {

  console.log(props);

  return(
    <div>
      Customer Dashboard Container
      <br />
    </div>
  )
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

export default connect(mapStateToProps)(CustomerDashboardContainer)
