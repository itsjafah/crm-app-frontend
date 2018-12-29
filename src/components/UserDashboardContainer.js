import React from 'react'
import UserSalesGoalInfo from './UserSalesGoalInfo'
import UserProductSalesInfo from './UserProductSalesInfo'


const UserDashboardContainer = (props) => {

    return(
      <div>
        <UserSalesGoalInfo />
        <UserProductSalesInfo />
      </div>
    )
  }


export default UserDashboardContainer
