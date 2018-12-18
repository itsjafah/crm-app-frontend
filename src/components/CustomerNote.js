import React from 'react'

const CustomerNote = (props) => {

  console.log(props);

  return(
    <div>
      {props.note.body}
    </div>
  )
}

export default CustomerNote
