import React from 'react'
import { connect } from 'react-redux'

const CustomerDashboard = (props) => {

  // annual sales goal should be a gas tank looking thing
  // categories a bar graph
  // best selling items a list 

  console.log(props.orderedProducts.map( orderedProduct => { return orderedProduct.product.category}))

  const customer_annual_sales_goal = props.viewThisCustomer.annual_goal

  const customer_orders = props.orders.filter( order => order.customer_id === props.viewThisCustomer.id)

  const customer_order_totals = customer_orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = customer_order_totals.reduce(reducer)


  const sales_to_reach_goal = (customer_annual_sales_goal - current_overall_sales)


  return(
    <div>
      <div>
        {props.viewThisCustomer.name}
        <br />
      </div>
      <div>
        Remaining Sales Goal: {sales_to_reach_goal}
        <br />
        Monthly Sales Goal: {(customer_annual_sales_goal - current_overall_sales)/(12)}
        <br />
        Weekly Sales Goal: {(customer_annual_sales_goal - current_overall_sales)/(52)}
        <br />
        Daily Sales Goal: {(customer_annual_sales_goal - current_overall_sales)/(365)}
        <br />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer,
  orders: state.orders,
  orderedProducts: state.orderedProducts
})

export default connect(mapStateToProps)(CustomerDashboard)
