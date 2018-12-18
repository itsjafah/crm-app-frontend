import React from 'react'
import { connect } from 'react-redux'

const CustomerDashboard = (props) => {

  return(
    <div>
      {props.viewThisCustomer.name}
      <br />
    </div>
  )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer
})

export default connect(mapStateToProps)(CustomerDashboard)
