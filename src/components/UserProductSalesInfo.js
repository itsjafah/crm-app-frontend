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

  var chartOptions =
    {
      percentageInnerCutout : 30,
      animationSteps : 120,
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 2,
      animationEasing : "easeOutBounce",
      animateRotate : true
    }


  var categoryWithQuantity = props.orderedProducts.map( orderedProduct => {
    return {category: orderedProduct.product.category, sales: orderedProduct.quantity * orderedProduct.product.price}
  })

  var temp = {};
  var obj = null;
  for(var i=0; i < categoryWithQuantity.length; i++) {
    obj=categoryWithQuantity[i];

     if(!temp[obj.category]) {
         temp[obj.category] = obj;
     } else {
         temp[obj.category].sales += obj.sales;
     }
  }


  var categoriesWithOrderQuantities = [];
  for (var prop in temp)
  categoriesWithOrderQuantities.push(temp[prop]);

  const categories = categoriesWithOrderQuantities.map( category => {
    return category.category
  })

  const categorySales = categoriesWithOrderQuantities.map( category => {
    return category.sales
  })

  var BarChart = require("react-chartjs").Bar;

  var barChartData = {
	labels: categories,
	datasets: [
		{
			label: "My First dataset",
			fillColor: "#1976d2",
			strokeColor: "",
			highlightFill: "#0d47a1",
			highlightStroke: "",
			data: categorySales
		}
	]
};

  var barChartOptions = {
	//Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	scaleBeginAtZero : true,

  animationSteps : 250,

	//Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,

	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.05)",

	//Number - Width of the grid lines
	scaleGridLineWidth : 1,

	//Boolean - Whether to show horizontal lines (except X axis)
	scaleShowHorizontalLines: true,

	//Boolean - Whether to show vertical lines (except Y axis)
	scaleShowVerticalLines: true,

	//Boolean - If there is a stroke on each bar
	barShowStroke : true,

	//Number - Pixel width of the bar stroke
	barStrokeWidth : 1,

	//Number - Spacing between each of the X value sets
	barValueSpacing : 5,

	//Number - Spacing between data sets within X values
	barDatasetSpacing : 1,
	//String - A legend template

}

    return(
      <div className="product-sales-and-annual-goal-container">
        <div className='user-product-sales-info-chart-header'>
          <h1>Sales by Category</h1>
        </div>
        <div className='user-product-sales-doodads-wrapper'>
          <div className='user-product-sales-info-charts'>
            <div className='product-by-catgory-chart'>
              <BarChart height={400} width={600} data={barChartData} options={barChartOptions}/>
            </div>
            <div className="user-annual-sales-goal-radial-chart">
              <h4>Annual Sales Goal:</h4>
                <DoughnutChart height={350} width={350} data={annualChartData} options={chartOptions}/>
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
