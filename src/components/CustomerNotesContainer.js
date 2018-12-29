import React from 'react'
import CustomerNote from './CustomerNote'
import CreateCustomerNote from './CreateCustomerNote'
import { connect } from 'react-redux'

const CustomerNotesContainer = (props) => {

  const filteredNotes = props.notes.filter(note => note.customer_id === props.viewThisCustomer.id)

  const note = filteredNotes.map( note => {
    return <CustomerNote key={note.id} note={note}/>
  })

  return(
    <div className="customer-notes-container">
        <br />
      {note}
      <CreateCustomerNote />
    </div>
  )

}

const mapStateToProps = (state) => ({
  notes: state.notes,
  viewThisCustomer: state.viewThisCustomer
})

export default connect(mapStateToProps)(CustomerNotesContainer)
