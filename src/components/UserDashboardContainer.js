import React from 'react'
import UserSalesGoalInfo from './UserSalesGoalInfo'
import UserProductSalesInfo from './UserProductSalesInfo'


const UserDashboardContainer = (props) => {

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
        </div>
      </div>
    )
  }


export default UserDashboardContainer
