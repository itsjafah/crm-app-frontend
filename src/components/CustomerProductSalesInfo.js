import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, VerticalBarSeriesCanvas, LabelSeries } from 'react-vis'


const CustomerProductSalesInfo = (props) => {

  const customerOrderedProducts = props.orderedProducts.filter( orderedProduct => orderedProduct.order.customer_id === props.viewThisCustomer.id)

  var categoryWithQuantity = customerOrderedProducts.map( orderedProduct => {
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
    <div className='customer-product-sales-graph-container'>
      <div className='customer-product-sales-chart-header'>
        <h1> Dollar Sales by Category</h1>
      </div>
      <div className='customer-product-sales-doodads-wrapper'>
        <div className="customer-product-sales-graph">
          <BarChart height={400} width={600} data={barChartData} options={barChartOptions}/>
        </div>
      </div>
    </div>
    )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer,
  orders: state.orders,
  orderedProducts: state.orderedProducts
})

export default connect(mapStateToProps)(CustomerProductSalesInfo)
