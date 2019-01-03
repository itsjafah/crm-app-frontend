import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, VerticalBarSeriesCanvas, LabelSeries } from 'react-vis'


const CustomerProductSalesInfo = (props) => {

  const customerOrderedProducts = props.orderedProducts.filter( orderedProduct => orderedProduct.order.customer_id === props.viewThisCustomer.id)

  const dataArr = customerOrderedProducts.map((op)=> {
      return {x: op.product.category, y: (op.quantity) * (op.product.price)}
  });


  return(
    <div className='customer-product-sales-graph-container'>
      <div className='customer-product-sales-chart-header'>
        <h1> Dollar Sales by Category</h1>
      </div>
      <div className='customer-product-sales-doodads-wrapper'>
        <div className="customer-product-sales-graph">
          <XYPlot
            className="bar-graph"
            xType="ordinal"
            width={600}
            height={300}
            xDistance={100} >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <VerticalBarSeries className="vertical-bar-series-example" data={dataArr} />
              <LabelSeries />
          </XYPlot>
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
