import React from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Product = (props) => {

  const money_round = (num) => {
    return Math.ceil(num * 100) / 100;
}

  return(
       <Table.Row>
         <Table.Cell><img src={props.product.image_url} height='150' width='120'/></Table.Cell>
         <Table.Cell><h3>{props.product.name}</h3></Table.Cell>
         <Table.Cell><h3>{props.product.category}</h3></Table.Cell>
         <Table.Cell><h3>{props.product.id}</h3></Table.Cell>
         <Table.Cell><h3>{props.product.cost}</h3></Table.Cell>
         <Table.Cell><h3>{props.product.price}</h3></Table.Cell>
         <Table.Cell><h3>{money_round((props.product.price - props.product.cost)/(props.product.price))}</h3></Table.Cell>
       </Table.Row>
  )
}

const mapStateToProps = (state) => ({
  selectedCategory: state.selectedCategory,
  products: state.products
})

export default connect(mapStateToProps)(Product)
