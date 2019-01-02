import React from 'react'
import { connect } from 'react-redux'
import { Button, Segment } from 'semantic-ui-react'


const Header = (props) => {


    return(
      <div className="header-container">
        <div className='header-buttons-container'>
          <div className='header-button'>
            <Button
              inverted color='orange'
              onClick={props.handleOpenDashboard}>
                Open Dashboard
            </Button>
          </div>
          <div className='header-button'>
            <Button
              inverted color='orange'
              onClick={props.handleViewProducts}>
                Products
            </Button>
          </div>
          <div className='header-button'>
            <Button
              inverted color='orange'
              onClick={props.handleCreateOrder}>
                Create Order
            </Button>
          </div>
        </div>
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

export default connect(null, mapDispatchToProps)(Header)
