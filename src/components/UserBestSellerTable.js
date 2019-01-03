import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'


const UserBestSellerTable = (props) => {


  let i

  function incrementCounter(){
    for (i=0; i < props.bestSeller.length; i++ ) {
      return i
    }
  }

  console.log(incrementCounter());

  return(
    <Table.Row>
      <Table.Cell><img src={props.bestSeller.image} height='100' width='100'/></Table.Cell>            <Table.Cell><h3>{props.bestSeller.name}</h3></Table.Cell>
      <Table.Cell><h3>{props.bestSeller.quantity}</h3></Table.Cell>
      <Table.Cell><h3>{props.bestSeller.category}</h3></Table.Cell>
    </Table.Row>
  )
}


export default UserBestSellerTable
