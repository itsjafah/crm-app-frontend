import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { fetchNotes } from '../actions/noteActions'

const NOTES_API = 'http://localhost:3000/api/v1/notes'

class CreateCustomerNote extends Component {

  // push note into array
  // update state
  // action needed on submit add note

  getNotes = () => {
    fetch(NOTES_API)
      .then(r => r.json())
      .then(r => {
        this.props.setNotes(r)
      })
  }

  clearNoteForm = () => {
    const noteForm = document.querySelector('#noteForm')
    console.log(noteForm);
    noteForm.reset()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.editNote === false) {
      // creating new note
      console.log('here');
      fetch(NOTES_API, {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 1,
          customer_id: this.props.viewThisCustomer.id,
          body: this.props.customerNoteInput
        })
      })
      .then(() => {
        this.getNotes()
        this.clearNoteForm()
      })

    } else if (this.props.editNote === true) {
        // editing note
        fetch(`${NOTES_API}/${this.props.editThisNote.id}`, {
          method: 'PATCH',
          headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user_id: 1,
            customer_id: this.props.viewThisCustomer.id,
            body: this.props.customerNoteInput
          })
        })
        // .then(() => this.props.dispatch(fetchNotes()))
        .then(() => this.getNotes())
      }

  }

  // to optimistically render
  // for this create a variable outside of the fetch to display the note
  // after the fetch, .then( r=> r.json()).then(()=> set the variable to the response value )

  render(){

    return(
      <div>
        <form
          onSubmit={e => this.handleSubmit(e)}
          id='noteForm'
        >
          <label>
            Add Note:
            <textarea
              type="text"
              onChange={e => this.props.handleNoteInput(e.target.value)}
              value={this.props.customerNoteInput}
          />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer,
  notes: state.notes,
  editThisNote: state.editThisNote,
  editNote: state.editNote,
  customerNoteInput: state.customerNoteInput
})

const mapDispatchToProps = (dispatch) => ({
  handleNoteInput: (input) => dispatch({
    type: "HANDLE_NOTE_INPUT",
    payload: input
  }),
  setNotes: (notes) => dispatch({
    type: 'SET_NOTES',
    payload: notes
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateCustomerNote)
