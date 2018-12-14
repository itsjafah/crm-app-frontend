import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'

const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'
const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

class App extends Component {

  state = {
    viewProducts: false,
    createOrder: false,
    openDashboard: false,
    customers: [],
    products: [],
    viewDollsActionFigures: false,
    viewMovies: false,
    viewBooks: false,
    viewToys: false,
    viewElectronics: false,
    viewBoardGames: false
  }

  handleViewProducts = () => {
    this.setState({
      viewProducts: true,
      openDashboard: false,
      createOrder: false
    })
  }

  handleCreateOrder = () => {
    this.setState({
      createOrder: true,
      viewProducts: false,
      openDashboard: false
    })
  }

  handleOpenDashboard = () => {
    this.setState({
      openDashboard: true,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewDollsActionFigures = () => {
    this.setState({
      viewDollsActionFigures: true,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewMovies = () => {
    this.setState({
      viewMovies: true,
      viewDollsActionFigures: false,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewBooks = () => {
    this.setState({
      viewBooks: true,
      viewMovies: false,
      viewDollsActionFigures: false,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewToys = () => {
    this.setState({
      viewToys: true,
      viewBooks: false,
      viewMovies: false,
      viewDollsActionFigures: false,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewElectronics = () => {
    this.setState({
      viewElectronics: true,
      viewToys: false,
      viewBooks: false,
      viewMovies: false,
      viewDollsActionFigures: false,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  handleViewBoardGames = () => {
    this.setState({
      viewBoardGames: true,
      viewElectronics: false,
      viewToys: false,
      viewBooks: false,
      viewMovies: false,
      viewDollsActionFigures: false,
      openDashboard: false,
      viewProducts: false,
      createOrder: false
    })
  }

  getCustomers = () => {
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        this.setState({
          customers: customers.customers
        }, () => console.log(customers.customers))
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
          handleViewProducts={this.handleViewProducts}
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}/>
        <MainContainer
          viewProducts={this.state.viewProducts}
          createOrder={this.state.createOrder}
          openDashboard={this.state.openDashboard}
          customers={this.state.customers}
          products={this.state.products}
          handleOpenDashboard={this.handleOpenDashboard}
          handleCreateOrder={this.handleCreateOrder}
          viewDollsActionFigures={this.state.viewDollsActionFigures}
          handleViewDollsActionFigures={this.handleViewDollsActionFigures}
          viewMovies={this.state.viewMovies}
          handleViewMovies={this.handleViewMovies}
          viewBooks={this.state.viewBooks}
          handleViewBooks={this.handleViewBooks}
          viewToys={this.state.viewToys}
          handleViewToys={this.handleViewToys}
          viewElectronics={this.state.viewElectronics}
          handleViewElectronics={this.handleViewElectronics}
          viewBoardGames={this.state.viewBoardGames}
          handleViewBoardGames={this.handleViewBoardGames}/>
      </div>
    );
  }
}

export default App;
