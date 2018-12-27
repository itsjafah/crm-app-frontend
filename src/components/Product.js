import React from 'react'

const Product = (props) => {

  const money_round = (num) => {
    return Math.ceil(num * 100) / 100;
}

  return(
    <tr>
      <td><img src={props.product.image_url} height='150' width='120'/></td>
      <td>{props.product.name}</td>
      <td>{props.product.category}</td>
      <td>{props.product.id}</td>
      <td>{props.product.cost}</td>
      <td>{props.product.price}</td>
      <td>{money_round((props.product.price - props.product.cost)/(props.product.price))}</td>
    </tr>
  )
}


export default Product
