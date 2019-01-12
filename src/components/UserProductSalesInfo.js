import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, LabelSeries, RadialChart } from 'react-vis'

const UserProductSalesInfo = (props) => {

  function money_round(num) {
    return Math.ceil(num * 100) / 100;
  }

  const user_annual_sales_goal = props.users[0].annual_goal

  const users_order_totals = props.orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = users_order_totals.reduce(reducer)

  const sales_to_reach_goal = money_round((user_annual_sales_goal - current_overall_sales))

  const dataArr = props.orderedProducts.map((op)=> {
      return {x: op.product.category, y: (op.quantity) * (op.product.price)}
  });

  var DoughnutChart = require("react-chartjs").Doughnut;

  var annualChartData = [
    {
      value: current_overall_sales > sales_to_reach_goal ? sales_to_reach_goal === 0 : sales_to_reach_goal,
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
      <div className="product-sales-and-annual-goal-container">
        <div className='user-product-sales-info-chart-header'>
          <h1>Sales by Category</h1>
        </div>
        <div className='user-product-sales-doodads-wrapper'>
          <div className='user-product-sales-info-charts'>
            <div className='product-by-catgory-chart'>
              <XYPlot
                className="user-product-sales-bar-graph" xType="ordinal"
                width={550}
                height={300}
                xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries className="vertical-bar-series-example" data={dataArr} />
                <LabelSeries />
              </XYPlot>
            </div>
            <div className="user-annual-sales-goal-radial-chart">
              <h4>Annual Sales Goal:</h4>
                <DoughnutChart data={annualChartData} options={chartOptions}/>
                <h3>
                 ${sales_to_reach_goal} Until Annual Goal
                </h3>
          </div>
          </div>
        </div>
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    users: state.users,
    orders: state.orders,
    orderedProducts: state.orderedProducts
  })

export default connect(mapStateToProps)(UserProductSalesInfo)
