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
    <table className="products-list-container">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Image</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Product</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">SKU</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Cost</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Price</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Margin</h3>
          </th>
        </tr>
        {product}
      </tbody>
    </table>
    </div>

  )

}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
  products: state.products
})

export default connect(mapStateToProps)(ProductsContainer)
