import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotes } from '../actions/noteActions'

const NOTES_API = 'http://localhost:3000/api/v1/notes'

class CreateCustomerNote extends Component {

  state = { customerNoteInput: '' }

  handleInput = (e) => {
    this.setState({
      customerNoteInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(NOTES_API, {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: 1,
        customer_id: this.props.viewThisCustomer.id,
        body: this.state.customerNoteInput
      })
    })
    .then( r => r.json())
    .then((newNote) => this.props.dispatch(fetchNotes(newNote)))
  }

  render(){
   console.log(this.props.viewThisCustomer.id)

    return(
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>
            Add Note:
            <input type="text" onChange={e => this.handleInput(e)}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer,
  notes: state.notes
})

export default connect(mapStateToProps)(CreateCustomerNote)
