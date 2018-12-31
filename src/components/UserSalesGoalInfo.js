import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const UserSalesGoalInfo = (props) => {

  console.log(props);

  const user_annual_sales_goal = props.users[0].annual_goal

  const users_order_totals = props.orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = users_order_totals.reduce(reducer)

  const sales_to_reach_goal = (user_annual_sales_goal - current_overall_sales)

  return(
    <div className="user-sales-goal-charts">
      <div className="daily">
      Daily:
        <RadialChart
          className="user-daily-sales-goal-radial-chart"
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
      <div className="weekly">
      Weekly:
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
      Monthly:
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
  )
}

const mapStateToProps = (state) => ({
  orders: state.orders,
  users: state.users,
  customers: state.customers,
  orderedProducts: state.orderedProducts
})


export default connect(mapStateToProps)(UserSalesGoalInfo)
