import React, { Component } from 'react'

const CustomerListItem = ({ customer }) => {

  console.log(customer);

    return(
      <div>
        {customer.name}
      </div>
    )
}

export default CustomerListItem
