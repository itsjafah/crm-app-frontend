import React from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

const UserDashboardContainer = (props) => {

    const user_sales_goal = props.users[0].annual_goal

    const users_order_totals = props.orders.map( order => {
      return order.total
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const current_overall_sales = users_order_totals.reduce(reducer)

    return(
      <div>
        Remaining Sales Goal: {user_sales_goal - current_overall_sales}
        <Sidebar customers={props.customers}/>
      </div>
    )
  }

const mapStateToProps = (state) => ({
  orders: state.orders,
  users: state.users,
  customers: state.customers,
})

export default connect(mapStateToProps)(UserDashboardContainer)
