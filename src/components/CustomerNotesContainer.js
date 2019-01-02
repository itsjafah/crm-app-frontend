import React, { Component } from 'react'
import CustomerNote from './CustomerNote'
import CreateCustomerNote from './CreateCustomerNote'
import { connect } from 'react-redux'

const NOTES_API = 'http://localhost:3000/api/v1/notes'

class CustomerNotesContainer extends Component {
  //
  // componentDidMount = () => {
  //   this.getNotes()
  // }


  render(){

    const filteredNotes = this.props.notes.filter(note => note.customer_id === this.props.viewThisCustomer.id)

    const notes = filteredNotes.map(note => {
      return <CustomerNote key={note.id} note={note} />
    })

    return(
      <div className="customer-notes-container">
        <div className='customer-notes-Header'>
          <h1> Customer Notes </h1>
        </div>
      <br />
        {notes}
        <CreateCustomerNote />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  notes: state.notes,
  viewThisCustomer: state.viewThisCustomer
})

export default connect(mapStateToProps)(CustomerNotesContainer)
