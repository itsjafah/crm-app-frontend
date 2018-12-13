import React, { Component } from 'react'

const ViewOrCreate = ({handleCreateOrder, handleOpenDashboard}) => {
  return(
    <div className="view-create-button-container">
      <button
        className="view-create-button"
        onClick={handleOpenDashboard}>Open Dashboard</button>
      <button
        className="view-create-button"
        onClick={handleCreateOrder}>Create Order</button>
    </div>
  )
}


export default ViewOrCreate
