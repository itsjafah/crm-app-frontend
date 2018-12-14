import React from 'react'
import CustomerListItem from './CustomerListItem'

const Sidebar = ({customers}) => {

  const customer = customers.map( customer => {
    return <CustomerListItem
              customer={customer}
              key={customer.id}/>
  })

    return(
      <div className="sidebar">
        <ul>
          {customer}
        </ul>
      </div>
    )
}

export default Sidebar
