import React from 'react'
import { connect } from 'react-redux'

const Product = (props) => {

  const money_round = (num) => {
    return Math.ceil(num * 100) / 100;
}

console.log(props);

  return(
    <tr>
      <td><img src={props.product.image_url} height='150' width='120'/></td>
      <td>{props.product.name}</td>
      <td>{props.product.category}</td>
      <td>{props.product.id}</td>
      <td>{props.product.cost}</td>
      <td>{props.product.price}</td>
      <td>{money_round((props.product.price - props.product.cost)/(props.product.price))}</td>
      <td><button onClick={e => props.handleAddProductToOrder(props.product.id)}>Add to Order</button></td>
    </tr>
  )
}

const mapStateToProps = (state) => ({
  addThisProductToOrder: state.addThisProductToOrder
})

const mapDispatchToProps = (dispatch) => ({
  handleAddProductToOrder: (productId) => dispatch({
    type: "HANDLE_ADD_PRODUCT_TO_ORDER",
    payload: productId
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)
