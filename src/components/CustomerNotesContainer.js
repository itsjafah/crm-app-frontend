import React, { Component } from 'react'
import CustomerNote from './CustomerNote'
import { fetchNotes } from "../actions/noteActions"
import { connect } from 'react-redux'

const CustomerNotesContainer = (props) => {

  console.log(props);

  const note = props.notes.filter(note => note.customer_id === props.viewThisCustomer.id)

  return(
    <div>
      Customer Notes Container
        <br />
      <CustomerNote note={note}/>
    </div>
  )

}

const mapStateToProps = (state) => ({
  notes: state.notes,
  viewThisCustomer: state.viewThisCustomer
})

export default connect(mapStateToProps)(CustomerNotesContainer)
