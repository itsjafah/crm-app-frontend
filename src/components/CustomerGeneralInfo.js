import React from 'react'
import { connect } from 'react-redux'

const CustomerGeneralInfo = (props) => {

  console.log(props);

  return(
    <div className="customer-general-info-container">
      <div>
        Customer: {props.viewThisCustomer.name}
        <br />
        Customer Address: {props.viewThisCustomer.address}
        <br />
        Customer Rank: {props.viewThisCustomer.rank}
        <br />
        2019 Sales Goal: {props.viewThisCustomer.annual_goal}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer
})


export default connect(mapStateToProps)(CustomerGeneralInfo)
