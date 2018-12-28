import React from 'react'
import CustomerListItem from './CustomerListItem'
import { connect } from 'react-redux'

const Sidebar = (props) => {

  console.log(props);

  const customer = props.customers.map( customer => {
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

const mapStateToProps = (state) => ({
  customers: state.customers
})

export default connect(mapStateToProps)(Sidebar)
