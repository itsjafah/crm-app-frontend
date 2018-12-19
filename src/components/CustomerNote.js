import React from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/noteActions'

const NOTES_API = 'http://localhost:3000/api/v1/notes'

class CustomerNote extends React.Component {

  handleDeleteNote = (note) => {
    fetch(`${NOTES_API}/${note.id}`, {
      method: 'DELETE',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then( r => r.json())
    .then(() => this.props.dispatch(fetchNotes()))
  }

  render(){
    return(
      <div>
      {this.props.note.body}
      <button onClick={(note) => this.handleDeleteNote(this.props.note)}>Delete</button>
      <button onClick={(note) => this.props.handleEditNote(this.props.note)}>Edit</button>
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
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomerNote)
