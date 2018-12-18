import React, { Component } from 'react'

class CreateCustomerNote extends Component {

  state = { customerNoteInput: '' }

  handleInput = (e) => {
    this.setState({
      customerNoteInput: e.target.value
    })
  }

  handleSubmit = () => {
    fetch()
  }

  render(){
    return(
      <div>
        <form>
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

export default CreateCustomerNote
