import React, { Component } from 'react'
import OrderForm from './OrderForm'
import UserDashboardContainer from './UserDashboardContainer'
import CategorySelector from './CategorySelector'
import DollsActionFiguresContainer from './DollsActionFiguresContainer'
import MoviesContainer from './MoviesContainer'
import BooksContainer from './BooksContainer'
import ToysContainer from './ToysContainer'
import ElectronicsContainer from './ElectronicsContainer'
import BoardGamesContainer from './BoardGamesContainer'
import CustomerDashboardContainer from './CustomerDashboardContainer'
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { fetchCustomers } from "../actions/customerActions"
import { fetchNotes } from "../actions/noteActions"

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCustomers())
    this.props.dispatch(fetchNotes())
  }

  renderContent = () => {

    if (this.props.createOrder === true) {
      return <OrderForm />
    } else if (this.props.openDashboard === true ) {
      return <UserDashboardContainer customers={this.props.customers}/>
    } else if (this.props.viewProducts === true && this.props.products !== undefined) {
      return <CategorySelector
                products={this.props.products}/>
    } else if (this.props.viewDollsActionFigures === true) {
      return <DollsActionFiguresContainer products={this.props.products}/>
    } else if (this.props.viewMovies === true) {
      return <MoviesContainer products={this.props.products}/>
    } else if (this.props.viewBooks === true) {
      return <BooksContainer products={this.props.products}/>
    } else if (this.props.viewToys === true) {
      return <ToysContainer products={this.props.products}/>
    } else if (this.props.viewElectronics === true) {
      return <ElectronicsContainer products={this.props.products}/>
    } else if (this.props.viewBoardGames === true) {
      return <BoardGamesContainer products={this.props.products}/>
    } else if (this.props.viewThisCustomer) {
      return <CustomerDashboardContainer />
    } else {
      return "login page soon"
    }
  }

  render(){

    const { error, loading } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }

}

// need to refactor the loading and error messages for customers and products fetches

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
  viewBoardGames: state.viewBoardGames,
  viewThisCustomer: state.viewThisCustomer,
  products: state.products,
  loading: state.loading,
  error: state.error,
  customers: state.customers,
  notes: state.customers
})


export default connect(mapStateToProps)(MainContainer)
