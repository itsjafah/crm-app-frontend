import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, VerticalBarSeriesCanvas, LabelSeries } from 'react-vis'

const UserProductSalesInfo = (props) => {

  console.log(props);

  const dataArr = props.orderedProducts.map((op)=> {
      return {x: op.product.category, y: (op.quantity) * (op.product.price)}
  });

    return(
      <div className='user-product-sales-charts'>
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
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    users: state.users,
    orders: state.orders,
    orderedProducts: state.orderedProducts
  })

export default connect(mapStateToProps)(UserProductSalesInfo)
