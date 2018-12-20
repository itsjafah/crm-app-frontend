import React from 'react'
import { connect } from 'react-redux'


const CategorySelector = (props) => {

  return(
    <div>
      <div>
        Select Category
      </div>
      <div>
        <button onClick={props.handleViewDollsActionFigures}>Dolls & Action Figures</button>
        <button onClick={props.handleViewMovies}>Movies</button>
        <button onClick={props.handleViewBooks}>Books</button>
        <br />
        <button onClick={props.handleViewToys}>Toys</button>
        <button onClick={props.handleViewElectronics}>Electronics</button>
        <button onClick={props.handleViewBoardGames}>Board Games</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleViewDollsActionFigures: () => dispatch({
      type: "TOGGLE_VIEW_DOLLS_ACTION_FIGURES",
      payload: "Dolls & Action Figures"
    }),
    handleViewToys: () => dispatch({
      type: "TOGGLE_VIEW_TOYS",
      payload: "Toys"
    }),
    handleViewBooks: () => dispatch({
      type: "TOGGLE_VIEW_BOOKS",
      payload: "Books"
    }),
    handleViewMovies: () => dispatch({
      type: "TOGGLE_VIEW_MOVIES",
      payload: "Movies"
    }),
    handleViewBoardGames: () => dispatch({
      type: "TOGGLE_VIEW_BOARD_GAMES",
      payload: "Board Games"
    }),
    handleViewElectronics: () => dispatch({
      type: "TOGGLE_VIEW_ELECTRONICS",
      payload: "Electronics"
    })
  }
}


export default connect(null, mapDispatchToProps)(CategorySelector)
