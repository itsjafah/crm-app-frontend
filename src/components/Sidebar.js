import React from 'react'
import CustomerListItem from './CustomerListItem'
import { connect } from 'react-redux'
import { push as Menu } from 'react-burger-menu';

const Sidebar = (props) => {

  console.log(props);

  const customer = props.customers.map( customer => {
    return <CustomerListItem
              customer={customer}
              key={customer.id}/>
  })

    return(
      <Menu>
      <a>
        {customer}
      </a>
      </Menu>
    )
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

export default connect(mapStateToProps)(Sidebar)
