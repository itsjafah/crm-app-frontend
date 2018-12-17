import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {

    return(
      <div>
        <button
          className="view-create-button"
          onClick={props.handleOpenDashboard}>Open Dashboard</button>
        <button onClick={props.handleViewProducts}>Products</button>
        <button
          className="view-create-button"
          onClick={props.handleCreateOrder}>Create Order</button>
      </div>
    )
  }

const mapDispatchToProps = (dispatch) => {
  return {
    handleViewProducts: () => dispatch({
      type: "TOGGLE_VIEW_PRODUCTS"
    }),
    handleCreateOrder: () => dispatch({
      type: "TOGGLE_CREATE_ORDER"
    }),
    handleOpenDashboard: () => dispatch({
      type: "TOGGLE_OPEN_DASHBOARD"
    })
  }
}


// why dont i need an action creator?

// component did mount, fetch, then store that object in state
// add products will be a new dispatch
// payload is all products

export default connect(null, mapDispatchToProps)(Header)
