import React, { Component } from 'react'

const CustomerListItem = ({ customer }) => {

    return(
      <div>
        {customer.name}
      </div>
    )
}

export default CustomerListItem
