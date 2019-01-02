import React from 'react'
import UserSalesGoalInfo from './UserSalesGoalInfo'
import UserProductSalesInfo from './UserProductSalesInfo'
import UserIndividualProductSalesInfo from './UserIndividualProductSalesInfo'
import { connect } from 'react-redux'


const UserDashboardContainer = (props) => {

  console.log(typeof props.orders[0].created_at);

    return(
      <div>
        <div className='user-dashboard-header'>
          <h1>
            User Sales Dashboard
          </h1>
        </div>
        <div className='user-dashboard-charts-container'>
          <UserSalesGoalInfo />
          <UserProductSalesInfo />
          <UserIndividualProductSalesInfo orderedProducts={props.orderedProducts} orders={props.orders}/>
        </div>
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    orderedProducts: state.orderedProducts,
    orders: state.orders,
  })


export default connect(mapStateToProps)(UserDashboardContainer)
