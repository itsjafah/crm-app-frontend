import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'

const ProductsContainer = (props) => {

  const filteredProducts = props.products.filter( product => product.category === props.selectedCategory)

  const product = filteredProducts.map( product => {
    return <Product product={product} key={product.id}/>
  })

  return(
    <div>
      {props.selectedCategory}
      <br />
      {product}
    </div>
  )

}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
  products: state.products
})

export default connect(mapStateToProps)(ProductsContainer)
