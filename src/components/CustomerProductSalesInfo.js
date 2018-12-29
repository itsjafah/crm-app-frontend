import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, VerticalBarSeriesCanvas, LabelSeries } from 'react-vis'

// filter orderedproducts by category - returns an array of products that belongs to that category
// x value is category name
// to get the total of each ordered item, map through the filtered products and return the product price x quantity
// reducer function returns the totals which becomes the y




const blueData = [{x: 'poop', y: 12}, {x: 'poopi', y: 2}, {x: 'C', y: 11}];


const CustomerProductSalesInfo = (props) => {

  const customerOrderedProducts = props.orderedProducts.filter( orderedProduct => orderedProduct.order.customer_id === props.viewThisCustomer.id)

  const dataArr = customerOrderedProducts.map((op)=> {
      return {x: op.product.category, y: (op.quantity) * (op.product.price)}
  });

  console.log(dataArr);
  console.log(customerOrderedProducts);


  return(
      <div>
        <XYPlot className="bar-graph" xType="ordinal" width={500} height={300} xDistance={100}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <VerticalBarSeries className="vertical-bar-series-example" data={dataArr} />
          <LabelSeries />
        </XYPlot>
      </div>
    )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer,
  orders: state.orders,
  orderedProducts: state.orderedProducts
})

export default connect(mapStateToProps)(CustomerProductSalesInfo)
