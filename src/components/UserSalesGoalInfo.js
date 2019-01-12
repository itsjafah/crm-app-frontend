import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const UserSalesGoalInfo = (props) => {

  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const todayAsString = "2019-01-12"

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

  const monthly_sales_goal = money_round((sales_to_reach_goal)/12)

  var DoughnutChart = require("react-chartjs").Doughnut;

  var dailyChartData = [
  	{
  		value: todays_sales > daily_sales_goal ? daily_sales_goal === 0 : money_round(daily_sales_goal - todays_sales),
  		color:"#d50000",
  		highlight: "#FF5A5E",
  		label: "To Reach Goal"
  	},
  	{
  		value: todays_sales,
  		color: "#00c853",
  		highlight: "#5AD3D1",
  		label: "Today's Sales"
  	}
  ]

  var weeklyChartData = [
  	{
  		value: current_overall_sales > weekly_sales_goal ? weekly_sales_goal === 0 : money_round(weekly_sales_goal - current_overall_sales),
  		color:"#d50000",
  		highlight: "#FF5A5E",
  		label: "To Reach Goal"
  	},
  	{
  		value: current_overall_sales,
  		color: "#00c853",
  		highlight: "#5AD3D1",
  		label: "Sales This Week"
  	}
  ]

  var monthlyChartData = [
  	{
  		value: current_overall_sales > monthly_sales_goal ? monthly_sales_goal === 0 : money_round(monthly_sales_goal - current_overall_sales),
  		color:"#d50000",
  		highlight: "#FF5A5E",
  		label: "To Reach Goal"
  	},
  	{
  		value: current_overall_sales,
  		color: "#00c853",
  		highlight: "#5AD3D1",
  		label: "Sales This Month"
  	}
  ]

  var chartOptions = {percentageInnerCutout : 30, animationSteps : 120, segmentShowStroke : true,
  segmentStrokeColor : "#fff", segmentStrokeWidth : 2, animationEasing : "easeOutBounce",animateRotate : true}

  return(
    <div className='user-sales-goal-charts-container'>
      <div className='user-sales-goal-chart-header'>
        <h1>Sales Tracker</h1>
      </div>
      <div className='user-doodads-wrapper'>
        <div className="user-sales-goal-charts">
          <div className="daily">
            <h4>Daily Sales Goal:</h4>
              <DoughnutChart data={dailyChartData} options={chartOptions}/>
              { todays_sales <  daily_sales_goal

                ?

                <h3>
                  Book ${money_round(daily_sales_goal - todays_sales)} today!
                </h3>

                :

                <h3>
                  You overbooked by ${money_round(todays_sales - daily_sales_goal)} today!
                </h3>

              }
          </div>
          <div className="weekly">
            <h4>Weekly Sales Goal:</h4>
              <DoughnutChart data={weeklyChartData} options={chartOptions}/>
              { todays_sales <  weekly_sales_goal

                ?

                <h3>
                  Book ${money_round(weekly_sales_goal - todays_sales)} this week!
                </h3>

                :

                <h3>
                  You overbooked by ${money_round(todays_sales - weekly_sales_goal)} this week!
                </h3>

              }
          </div>
          <div className="monthly">
            <h4>Monthly Sales Goal:</h4>
              <DoughnutChart data={monthlyChartData} options={chartOptions}/>
              { todays_sales <  monthly_sales_goal

                ?

                <h3>
                  Book ${money_round(monthly_sales_goal - todays_sales)} this month!
                </h3>

                :

                <h3>
                  You overbooked by ${money_round(todays_sales - monthly_sales_goal)} this month!
                </h3>

              }
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
