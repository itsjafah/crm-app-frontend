import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'



const CategorySelector = (props) => {


  return(
    <div>
      <div className='select-category-header'>
        <h1>
          Select Category
        </h1>
      </div>
      <div className='grid-container'>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined" onClick={props.handleViewDollsActionFigures}>
          Dolls
        </Button>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewMovies}>
            Movies
        </Button>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewBooks}>
            Books
        </Button>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewToys}>
            Toys
        </Button>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewElectronics}>
            Electronics
        </Button>
        <Button
          color='blue'
          className='grid-item'
          size='massive'
          variant="outlined"
          onClick={props.handleViewBoardGames}>
            Board Games
        </Button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleViewDollsActionFigures: () => dispatch({
      type: "TOGGLE_VIEW_DOLLS_ACTION_FIGURES",
      payload: "Dolls"
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
