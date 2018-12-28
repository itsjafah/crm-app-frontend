import React from 'react'
import { connect } from 'react-redux'


const Header = (props) => {


    return(
      <div className="header-container">
        <div className="header-buttons-container">
          <button
          className="view-create-button"
          onClick={props.handleOpenDashboard}>Open Dashboard</button>
          <div className="dropdown">
          <button
          className="dropbtn"
          onClick={props.handleViewProducts}>Products</button>
        <div className="dropdown-content">
          <a onClick={props.handleViewDollsActionFigures}>Dolls & Action Figures</a>
          <a onClick={props.handleViewToys}>Toys</a>
          <a onClick={props.handleViewMovies}>Movies</a>
          <a onClick={props.handleViewBooks}>Books</a>
          <a onClick={props.handleViewBoardGames}>Board Games</a>
          <a onClick={props.handleViewElectronics}>Electronics</a>
        </div>
        </div>
          <button
          className="view-create-button"
          onClick={props.handleCreateOrder}>Create Order</button>
        </div>
      </div>
    )
  }
  // <div>
  //  <nav>
  //    <div className="nav-wrapper">
  //      <a href="#" className="brand-logo">Logo</a>
  //      <ul id="nav-mobile" className="right hide-on-med-and-down">
  //        <li><a href="sass.html">Sass</a></li>
  //        <li><a href="badges.html">Components</a></li>
  //        <li><a href="collapsible.html">JavaScript</a></li>
  //      </ul>
  //    </div>
  //  </nav>
  // </div>


const mapDispatchToProps = (dispatch) => {
  return {
    handleViewProducts: () => dispatch({
      type: "TOGGLE_VIEW_PRODUCTS"
    }),
    handleCreateOrder: () => dispatch({
      type: "TOGGLE_CREATE_ORDER"
    }),
    handleOpenDashboard: () => dispatch({
      type: "TOGGLE_OPEN_DASHBOARD"
    }),
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

export default connect(null, mapDispatchToProps)(Header)
