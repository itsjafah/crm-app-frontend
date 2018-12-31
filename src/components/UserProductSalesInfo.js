import React from 'react'
import { connect } from 'react-redux'
import { XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, VerticalBarSeries, VerticalBarSeriesCanvas, LabelSeries, RadialChart } from 'react-vis'

const UserProductSalesInfo = (props) => {

  const user_annual_sales_goal = props.users[0].annual_goal

  const users_order_totals = props.orders.map( order => {
    return order.total
  })

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const current_overall_sales = users_order_totals.reduce(reducer)

  const sales_to_reach_goal = (user_annual_sales_goal - current_overall_sales)

  console.log(props);

  const dataArr = props.orderedProducts.map((op)=> {
      return {x: op.product.category, y: (op.quantity) * (op.product.price)}
  });

    return(
      <div className="product-sales-and-annual-goal-container">
          <XYPlot
            className="user-product-sales-bar-graph" xType="ordinal"
            width={350}
            height={300}
            xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries className="vertical-bar-series-example" data={dataArr} />
            <LabelSeries />
          </XYPlot>
        <div           className="user-annual-sales-goal-radial-chart">
        Annual:
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
