import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const UserSalesGoalInfo = (props) => {

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

  const user_annual_sales_goal = props.users[0].annual_goal

  const users_order_totals = props.orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = users_order_totals.reduce(reducer)

  const sales_to_reach_goal = (user_annual_sales_goal - current_overall_sales)

  // const daily_sales_goal = money_round((sales_to_reach_goal)/(daysUntilDec31))

  const daily_sales_goal = money_round((sales_to_reach_goal)/365)

  const weekly_sales_goal = money_round((sales_to_reach_goal)/52)


  return(
    <div className='user-sales-goal-charts-container'>
      <div className='user-sales-goal-chart-header'>
        <h1>Sales Tracker</h1>
      </div>
      <div className='user-doodads-wrapper'>
        <div className="user-sales-goal-charts">
          <div className="daily">
            <h4>Daily Sales Goal:</h4>
              <RadialChart
                colorType={'literal'}
                colorDomain={[0, 100]}
                colorRange={[0, 10]}
                margin={{top: 100}}
                getLabel={d => d.name}
                data={[
                  {angle: 100, color: '#1B830B', name: 100},
                  {angle: daily_sales_goal, color: '#B32400', name: daily_sales_goal },
                ]}
                labelsRadiusMultiplier={1.1}
                labelsStyle={{fontSize: 16, fill: '#222'}}
                showLabels
                style={{stroke: '#fff', strokeWidth: 2}}
                width={250}
                height={200}
              />
              <h3>
              Book ${daily_sales_goal} Today
              </h3>
          </div>
          <div className="weekly">
            <h4>Weekly Sales Goal:</h4>
              <RadialChart
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
              <h3>
                Book ${weekly_sales_goal} This Week
              </h3>
          </div>
          <div className="monthly">
            <h4>Monthly Sales Goal:</h4>
              <RadialChart
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
              <h3>
                Book ${daily_sales_goal} This Month
              </h3>
          </div>
        </div>
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
