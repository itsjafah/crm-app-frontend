import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const UserSalesGoalInfo = (props) => {

  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  // need to find out how to store all orders placed today in an array, then reduce the totals to find the sum. that becomes the green part of the daily pie

  console.log(props.orders);


  // days until dec 31 //

  const todayAsString = "2019-01-02"

  const today = new Date()

  // finding daily sales START

  function ordersPlacedToday(){
    return props.orders.filter( order =>
    order.created_at.slice(0,10) === todayAsString)
  }

  const todays_orders_totals = ordersPlacedToday().map(order => {
    return order.total
  })

  const todays_sales = todays_orders_totals.reduce(reducer);

  console.log('todays sales', todays_sales);

  // finding daily sales END

  // **************

  // days until dec 31 START //


  const endOfYear = new Date(today.getFullYear(), 11, 31);
  if (today.getMonth()==11 && today.getDate()>=31)
  {
  endOfYear.setFullYear(endOfYear.getFullYear()+1);
  }
  const one_day=1000*60*60*24;

  const daysUntilDec31 = Math.ceil((endOfYear.getTime()-today.getTime())/(one_day))


  // days until dec 31 END //

  const user_annual_sales_goal = props.users[0].annual_goal

  const users_order_totals = props.orders.map( order => {
    return order.total
  })

  const current_overall_sales = users_order_totals.reduce(reducer)

  const sales_to_reach_goal = (user_annual_sales_goal - current_overall_sales)

  const daily_sales_goal = money_round((sales_to_reach_goal)/daysUntilDec31)

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
                  {angle: todays_sales, color: '#1B830B', name: todays_sales},
                  {angle: (daily_sales_goal - todays_sales), color: '#B32400', name: (daily_sales_goal - todays_sales)},
                ]}
                labelsRadiusMultiplier={1.1}
                labelsStyle={{fontSize: 16, fill: '#222'}}
                showLabels
                style={{stroke: '#fff', strokeWidth: 2}}
                width={250}
                height={200}
              />
              { todays_sales <  daily_sales_goal

                ?

                <h3>
                  Book ${daily_sales_goal - todays_sales} today!
                </h3>

                :

                <h3>
                  You overbooked by ${todays_sales - daily_sales_goal} today!
                </h3>

              }
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
                  {angle: weekly_sales_goal, color: '#B32400', name: weekly_sales_goal },
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
