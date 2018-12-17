import React, { Component } from 'react';
import './App.css';
import MainContainer from './components/MainContainer'
import Header from './components/Header'
import { connect } from 'react-redux'

const CUSTOMERS_API = 'http://localhost:3000/api/v1/customers'
const PRODUCTS_API = 'http://localhost:3000/api/v1/products'

class App extends Component {


  // component did mount, fetch, then store that object in state
  // add products will be a new dispatch
  // payload is all products

  getCustomers = () => {
    fetch(CUSTOMERS_API)
      .then(r => r.json())
      .then( customers => {
        return {
          customers: customers.customers
        }
      })
  }

  getProducts = () => {
  }

  componentDidMount(){
    this.getCustomers()
    this.getProducts()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch({
      type: "FETCH_PRODUCTS",
      payload: fetch(PRODUCTS_API)
            .then(r => r.json())
            .then( products => {
              return {products: products.products }
            })
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
