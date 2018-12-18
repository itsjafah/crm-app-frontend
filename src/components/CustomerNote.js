import React from 'react'
import CreateCustomerNote from './CreateCustomerNote'

const CustomerNote = (props) => {
  
  return(
    <div>
      Customer Note
      <br />
      {props.note[0].body}
      <br />
      <CreateCustomerNote />
    </div>
  )
}

export default CustomerNote
