import React from 'react'

const Product = (props) => {

  console.log(props)
  return(
    <div>
      {props.product.name}
    </div>
  )
}

export default Product
