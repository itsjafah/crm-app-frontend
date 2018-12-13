import React, { Component } from 'react'
import CustomerListItem from './CustomerListItem'

const Sidebar = ({ customers }) => {

  const customer = customers.map( customer => {
    return <CustomerListItem
              customer={customer}
              key={customer.id}/>
  })

    return(
      <div>
        <ul>
          <li>{customer}</li>
        </ul>
      </div>
    )
}

export default Sidebar
