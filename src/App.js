import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import { connect } from 'react-redux'

class App extends Component {


  // component did mount, fetch, then store that object in state
  // add products will be a new dispatch
  // payload is all products

  render() {
    return (
      <div className="App">
        <Header/>
        <MainContainer
          viewProducts={this.props.viewProducts}
          createOrder={this.props.createOrder}
          openDashboard={this.props.openDashboard}
          customers={this.props.customers}
          products={this.props.products}
          viewDollsActionFigures={this.props.viewDollsActionFigures}
          viewMovies={this.props.viewMovies}
          viewBooks={this.props.viewBooks}
          viewToys={this.props.viewToys}
          viewElectronics={this.props.viewElectronics}
          viewBoardGames={this.props.viewBoardGames}/>
      </div>
    );
  }
}

// why do i need to have state in App and not just in the component where it's needed. nothing is being sent down to Header component

const mapStateToProps = (state) => ({
  viewProducts: state.viewProducts,
  createOrder: state.createOrder,
  openDashboard: state.openDashboard,
  customers: state.customers,
  products: state.products,
  viewDollsActionFigures: state.viewDollsActionFigures,
  viewMovies: state.viewMovies,
  viewBooks: state.viewBooks,
  viewToys: state.viewToys,
  viewElectronics: state.viewElectronics,
  viewBoardGames: state.viewBoardGames
})

export default connect(mapStateToProps)(App);
