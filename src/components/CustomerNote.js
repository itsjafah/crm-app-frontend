import React from 'react'
import { connect } from 'react-redux'

const NOTES_API = 'http://localhost:3000/api/v1/notes'

class CustomerNote extends React.Component {

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

  handleDeleteNote = (note) => {
    fetch(`${NOTES_API}/${note.id}`, {
      method: 'DELETE',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.getNotes()
      this.clearNoteForm()
    })
  }

  render(){

    return(
      <div className='customer-note-body-container'>
        <div className='customer-note-body'>
          <h3>
            {this.props.note.body}
          </h3>
        </div>
        <div className='note-buttons'>
          <button onClick={(note) => this.handleDeleteNote(this.props.note)}>Delete</button>
          <button onClick={(note) => this.props.handleEditNote(this.props.note)}>Edit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
  handleEditNote: (note) => dispatch({
    type: "EDIT_NOTE",
    payload: note
  }),
  setNotes: (notes) => dispatch({
    type: 'SET_NOTES',
    payload: notes
  })

})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerNote)
