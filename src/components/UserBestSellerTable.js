import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'


const UserBestSellerTable = (props) => {

  return(
    <Table.Row id='best-seller-table-row'>
      <Table.Cell id='best-seller-table-row-cell-image'>
          <img src={props.bestSeller.image} height='120' width='100'/>
      </Table.Cell>            
      <Table.Cell id='best-seller-table-row-cell-product'><h3>{props.bestSeller.name}</h3></Table.Cell>
      <Table.Cell id='best-seller-table-row-cell-quantity'><h3>{props.bestSeller.quantity}</h3></Table.Cell>
      <Table.Cell id='best-seller-table-row-cell-category'><h3>{props.bestSeller.category}</h3></Table.Cell>
    </Table.Row>
  )
}


export default UserBestSellerTable
