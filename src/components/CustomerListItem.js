import React from 'react'
import { connect } from 'react-redux'
import { Menu } from 'semantic-ui-react'

const CustomerListItem = (props) => {

    return(
      <div onClick={() => props.handleViewCustomer(props.customer)}>
        {props.customer.name}
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleViewCustomer: (customer) => dispatch({
      type: "VIEW_THIS_CUSTOMER",
      payload: customer
    })
  }
}

export default connect(null, mapDispatchToProps)(CustomerListItem)
