import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import { connect } from 'react-redux'

const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'
const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

class App extends Component {

  // state = {
  //   viewProducts: false,
  //   createOrder: false,
  //   openDashboard: false,
  //   customers: [],
  //   products: [],
  //   viewDollsActionFigures: false,
  //   viewMovies: false,
  //   viewBooks: false,
  //   viewToys: false,
  //   viewElectronics: false,
  //   viewBoardGames: false
  // }

  handleViewProducts = (toy) => {
    this.props.dispatch({type: "TOGGLE_VIEW_PRODUCTS"})
  }

  handleCreateOrder = () => {
    this.props.dispatch({type: "TOGGLE_CREATE_ORDER"})
  }

  handleOpenDashboard = () => {
    this.props.dispatch({type: "TOGGLE_OPEN_DASHBOARD"})
  }

  handleViewDollsActionFigures = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_DOLLS_ACTION_FIGURES"})
  }

  handleViewMovies = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_MOVIES"})
  }

  handleViewBooks = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_BOOKS"})
  }

  handleViewToys = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_TOYS"})
  }

  handleViewElectronics = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_ELECTRONICS"})
  }

  handleViewBoardGames = () => {
    this.props.dispatch({type: "TOGGLE_VIEW_BOARD_GAMES"})
  }

  getCustomers = () => {
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        this.setState({
          customers: customers.customers
        })
      })
  }

  getProducts = () => {
    fetch(PRODUCTS_API)
      .then(r => r.json())
      .then( products => {
        this.setState({
          products: products.products
        })
      })
  }

  componentDidMount(){
    this.getCustomers()
    this.getProducts()
  }

  render() {
    return (
      <div className="App">
        <Header
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}/>
        <MainContainer
          viewProducts={this.props.viewProducts}
          createOrder={this.props.createOrder}
          openDashboard={this.props.openDashboard}
          customers={this.props.customers}
          products={this.props.products}
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}
          viewDollsActionFigures={this.props.viewDollsActionFigures}
          handleViewDollsActionFigures={this.handleViewDollsActionFigures}
          viewMovies={this.props.viewMovies}
          handleViewMovies={this.handleViewMovies}
          viewBooks={this.props.viewBooks}
          handleViewBooks={this.handleViewBooks}
          viewToys={this.props.viewToys}
          handleViewToys={this.handleViewToys}
          viewElectronics={this.props.viewElectronics}
          handleViewElectronics={this.handleViewElectronics}
          viewBoardGames={this.props.viewBoardGames}
          handleViewBoardGames={this.handleViewBoardGames}/>
      </div>
    );
  }
}

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
