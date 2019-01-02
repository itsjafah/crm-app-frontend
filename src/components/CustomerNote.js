import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

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
          <Button
            onClick={(note) => this.handleDeleteNote(this.props.note)}
            color='red'
            className='grid-item'
            size='mini'
            variant="outlined">
              Delete
          </Button>
          <Button
            onClick={(note) => this.props.handleEditNote(this.props.note)}
            color='blue'
            className='grid-item'
            size='mini'
            variant="outlined">
              Edit
          </Button>
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
