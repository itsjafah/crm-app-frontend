import React from 'react'
import { connect } from 'react-redux'

const Product = (props) => {

  const money_round = (num) => {
    return Math.ceil(num * 100) / 100;
}

  return(
    <tr>
      <td>{"Coming Soon"}</td>
      <td>{props.product.name}</td>
      <td>{props.product.category}</td>
      <td>{props.product.id}</td>
      <td>{props.product.cost}</td>
      <td>{props.product.price}</td>
      <td>{money_round((props.product.price - props.product.cost)/(props.product.price))}</td>
    </tr>
  )
}



// const mapStateToProps = (state) => ({
//   state.
// })

export default Product
