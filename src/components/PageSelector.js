import React from 'react'
import { connect } from 'react-redux'
// import Button from '@material-ui/core/Button'
import { Button } from 'semantic-ui-react'



const PageSelector = (props) => {


  return(
    <div>
      <div className='select-category-header'>
        <h1>
          Where would you like to go?
        </h1>
      </div>
      <div className='page-selector-container'>
        <Button
          color='orange'
          className='grid-item'
          size='massive'
          variant="outlined" onClick={props.handleOpenDashboard}>
          Open User Dashboard
        </Button>
        <Button
          color='orange'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewProducts}>
            View Products
        </Button>
        <Button
          color='orange'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleCreateOrder}>
            Create Order
        </Button>
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


export default connect(null, mapDispatchToProps)(PageSelector)
