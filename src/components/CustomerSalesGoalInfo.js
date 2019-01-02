import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const CustomerSalesGoalInfo = (props) => {

  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }


  // days until dec 31 //

  const today=new Date()

  const ordersPlacedToday = []

  // function dateChecker(){
  //   return props.orders.map( order => {
  //     // if (order.created_at.setHours(0,0,0,0) == today.setHours(0,0,0,0)) {
  //     //   return ordersPlacedToday.push(order)
  //     // }
  //     if (today.toDateString() == order.created_at.toDateString()) {
  //       return ordersPlacedToday.push(order)
  //     }
  //   })
  // }

  // console.log(dateChecker());
  console.log(today.getTime());

  // var valid = (new Date(timestamp)).getTime()

  const endOfYear = new Date(today.getFullYear(), 11, 30);
  if (today.getMonth()==11 && today.getDate()>=31)
  {
  endOfYear.setFullYear(endOfYear.getFullYear()+1);
  }
  const one_day=1000*60*60*24;

  const daysUntilDec31 = Math.ceil((endOfYear.getTime()-today.getTime())/(one_day))

  // days until dec 31 //

  const customer_annual_sales_goal = props.viewThisCustomer.annual_goal

  const filtered_customers_orders = props.orders.filter( order => {
    return order.customer_id === props.viewThisCustomer.id
  })

  const customers_order_totals = filtered_customers_orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = customers_order_totals.reduce(reducer)

  const sales_to_reach_goal = (customer_annual_sales_goal - current_overall_sales)

  const daily_sales_goal = money_round((sales_to_reach_goal)/(daysUntilDec31))

  return(
    <div className="customer-sales-goal-charts-container">
      <div className="customer-sales-goal-chart-header">
        <h1>Sales Tracker</h1>
      </div>
      <div className="customer-sales-goal-charts">
        <div className="weekly">
          <h4>Weekly Sales Goal:</h4>
          <RadialChart
            className="user-daily-sales-goal-radial-chart"
            colorType={'literal'}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
            margin={{top: 100}}
            getLabel={d => d.name}
            data={[
              {angle: daily_sales_goal, color: '#1B830B', name: daily_sales_goal},
              {angle: sales_to_reach_goal, color: '#B32400', name: sales_to_reach_goal },
            ]}
            labelsRadiusMultiplier={1.1}
            labelsStyle={{fontSize: 16, fill: '#222'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 2}}
            width={250}
            height={200}
          />
        </div>
        <div className="weekly">
          <h4>Monthly Sales Goal:</h4>
          <RadialChart
            className="user-weekly-sales-goal-radial-chart"
            colorType={'literal'}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
            margin={{top: 100}}
            getLabel={d => d.name}
            data={[
              {angle: current_overall_sales, color: '#1B830B', name: current_overall_sales},
              {angle: sales_to_reach_goal, color: '#B32400', name: sales_to_reach_goal },
            ]}
            labelsRadiusMultiplier={1.1}
            labelsStyle={{fontSize: 16, fill: '#222'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 2}}
            width={250}
            height={200}
          />
        </div>
        <div className="monthly">
          <h4>Annual Sales Goal:</h4>
          <RadialChart
            className="user-monthly-sales-goal-radial-chart"
            colorType={'literal'}
            colorDomain={[0, 100]}
            colorRange={[0, 10]}
            margin={{top: 100}}
            getLabel={d => d.name}
            data={[
              {angle: current_overall_sales, color: '#1B830B', name: current_overall_sales},
              {angle: sales_to_reach_goal, color: '#B32400', name: sales_to_reach_goal },
            ]}
            labelsRadiusMultiplier={1.1}
            labelsStyle={{fontSize: 16, fill: '#222'}}
            showLabels
            style={{stroke: '#fff', strokeWidth: 2}}
            width={250}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    viewThisCustomer: state.viewThisCustomer,
    orders: state.orders
})


export default connect(mapStateToProps)(CustomerSalesGoalInfo)
