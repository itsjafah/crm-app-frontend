import React from 'react'
import { connect } from 'react-redux'
import { RadialChart } from 'react-vis';

const CustomerSalesGoalInfo = (props) => {

  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const today=new Date()

  // days until dec 31 START //

  const endOfYear = new Date(today.getFullYear(), 11, 31);
  if (today.getMonth()==11 && today.getDate()>=31)
  {
  endOfYear.setFullYear(endOfYear.getFullYear()+1);
  }
  const one_day=1000*60*60*24;

  const daysUntilDec31 = Math.ceil((endOfYear.getTime()-today.getTime())/(one_day))

  // days until dec 31 END //

  const customer_annual_sales_goal = props.viewThisCustomer.annual_goal

  const filtered_customers_orders = props.orders.filter( order => {
    return order.customer_id === props.viewThisCustomer.id
  })

  const customers_order_totals = filtered_customers_orders.map( order => {
    return order.total
  })

  const current_overall_sales = customers_order_totals.reduce(reducer)

  const sales_to_reach_goal = (customer_annual_sales_goal - current_overall_sales)

  const monthly_sales_goal = money_round((sales_to_reach_goal)/(12))

  const weekly_sales_goal = money_round((sales_to_reach_goal)/(52))

  var DoughnutChart = require("react-chartjs").Doughnut;

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

  var annualChartData = [
  	{
  		value: current_overall_sales > sales_to_reach_goal ? sales_to_reach_goal === 0 : money_round(sales_to_reach_goal - current_overall_sales),
  		color:"#d50000",
  		highlight: "#FF5A5E",
  		label: "To Reach Goal"
  	},
  	{
  		value: current_overall_sales,
  		color: "#00c853",
  		highlight: "#5AD3D1",
  		label: "Annual Sales"
  	}
  ]

  var chartOptions = {percentageInnerCutout : 30, animationSteps : 120, segmentShowStroke : true,
  segmentStrokeColor : "#fff", segmentStrokeWidth : 2, animationEasing : "easeOutBounce",animateRotate : true}

  return(
    <div className="customer-sales-goal-charts-container">
      <div className="customer-sales-goal-chart-header">
        <h1>Sales Tracker</h1>
      </div>
      <div className='customer-sales-tracker-doodads-wrapper'>
        <div className="customer-sales-goal-charts">
          <div className="weekly">
            <h4>Weekly Sales Goal:</h4>
            <DoughnutChart height={275} width={275} data={weeklyChartData} options={chartOptions}/>
            { current_overall_sales <  weekly_sales_goal

              ?

              <h3>
                Book ${money_round(weekly_sales_goal - current_overall_sales)} this week!
              </h3>

              :

              <h3>
                You overbooked by ${money_round(current_overall_sales - weekly_sales_goal)} this week!
              </h3>

            }
          </div>
          <div className="weekly">
            <h4>Monthly Sales Goal:</h4>
            <DoughnutChart height={275} width={275} data={monthlyChartData} options={chartOptions}/>
            { current_overall_sales <  monthly_sales_goal

              ?

              <h3>
                Book ${money_round(monthly_sales_goal - current_overall_sales)} this month!
              </h3>

              :

              <h3>
                You overbooked by ${money_round(current_overall_sales - monthly_sales_goal)} this month!
              </h3>

            }
          </div>
          <div className="monthly">
            <h4>Annual Sales Goal:</h4>
            <DoughnutChart height={275} width={275} data={annualChartData} options={chartOptions}/>
            { current_overall_sales <  customer_annual_sales_goal

              ?

              <h3>
                Book ${money_round(customer_annual_sales_goal - current_overall_sales)} to reach goal!
              </h3>

              :

              <h3>
                {props.viewThisCustomer.name} hit their goal!
              </h3>

            }
          </div>
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
