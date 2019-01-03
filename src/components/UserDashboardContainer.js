import React from 'react'
import UserSalesGoalInfo from './UserSalesGoalInfo'
import UserProductSalesInfo from './UserProductSalesInfo'
import UserBestSellersContainer from './UserBestSellersContainer'


const UserDashboardContainer = (props) => {

    return(
      <div>
        <div className='user-dashboard-header'>
          <h1>
            User Sales Dashboard
          </h1>
        </div>
          <UserSalesGoalInfo />
          <UserProductSalesInfo />
          <UserBestSellersContainer />
      </div>
    )
  }


export default UserDashboardContainer
