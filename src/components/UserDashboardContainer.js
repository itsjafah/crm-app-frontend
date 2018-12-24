import React from 'react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'

const UserDashboardContainer = (props) => {

    const user_annual_sales_goal = props.users[0].annual_goal

    const users_order_totals = props.orders.map( order => {
      return order.total
    })

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const current_overall_sales = users_order_totals.reduce(reducer)

    const sales_to_reach_goal = (user_annual_sales_goal - current_overall_sales)

    // daily sales goal - ANNUAL === remaining sales goal divided by number of days from now until jan 1

    // monthly goal ===  remaining sales goal divided by number of months from now until jan 1

    // weekly goal === remaining sales goal divided by number of weeks from now until jan 1



    return(
      <div>
        Remaining Sales Goal: {sales_to_reach_goal}
        <br />
        Monthly Sales Goal: {(user_annual_sales_goal - current_overall_sales)/(12)}
        <br />
        Weekly Sales Goal: {(user_annual_sales_goal - current_overall_sales)/(52)}
        <br />
        Daily Sales Goal: {(user_annual_sales_goal - current_overall_sales)/(365)}

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
