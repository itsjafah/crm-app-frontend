import React from 'react'
import OrderForm from './OrderForm'

const OrderFormContainer = () => {

  return(
    <div>
    <div className='create-order-header'>
      <h1>
        Create Order
      </h1>
    </div>
      <OrderForm />
    </div>
  )
}


export default OrderFormContainer
