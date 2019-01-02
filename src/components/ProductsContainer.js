import React from 'react'
import Product from './Product'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProductsContainer = (props) => {

  console.log(props);

  const filteredProducts = props.products.filter( product => product.category === props.selectedCategory)

  const product = filteredProducts.map( product => {
    return <Product product={product} key={product.id}/>
  })

  return(
    <div>
      <div className='product-category-header'>
        <h1>
          {props.selectedCategory}
        </h1>
      </div>
      <Table className='product-table'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className='product-header'><h2>Image</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>Product</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>Category</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>SKU</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>Cost</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>Price</h2></Table.HeaderCell>
            <Table.HeaderCell><h2>Margin</h2></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {product}
        </Table.Body>
      </Table>
    </div>
  )

}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
  products: state.products
})

export default connect(mapStateToProps)(ProductsContainer)
