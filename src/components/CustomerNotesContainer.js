import React from 'react'
import CustomerNote from './CustomerNote'
import { connect } from 'react-redux'

const CustomerNotesContainer = (props) => {

  const filteredNotes = props.notes.filter(note => note.customer_id === props.viewThisCustomer.id)

  const note = filteredNotes.map( note => {
    return <CustomerNote key={note.id} note={note}/>
  })

  console.log(note);
  return(
    <div>
      Customer Notes Container
        <br />
      {note}
    </div>
  )

}

const mapStateToProps = (state) => ({
  notes: state.notes,
  viewThisCustomer: state.viewThisCustomer
})

export default connect(mapStateToProps)(CustomerNotesContainer)
