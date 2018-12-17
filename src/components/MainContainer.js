import React, { Component } from 'react'
import OrderForm from './OrderForm'
import Dashboard from './Dashboard'
import CategorySelector from './CategorySelector'
import DollsActionFiguresContainer from './DollsActionFiguresContainer'
import MoviesContainer from './MoviesContainer'
import BooksContainer from './BooksContainer'
import ToysContainer from './ToysContainer'
import ElectronicsContainer from './ElectronicsContainer'
import BoardGamesContainer from './BoardGamesContainer'
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { fetchCustomers } from "../actions/customerActions";

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts());
    this.props.dispatch(fetchCustomers())
  }

  renderContent = () => {

    if (this.props.createOrder === true) {
      return <OrderForm />
    } else if (this.props.openDashboard === true ) {
      return <Dashboard customers={this.props.customers}/>
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
    } else {
      return "login page soon"
    }
  }

  render(){
    console.log(this.props);
    const { error, loading, products } = this.props;

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

const mapStateToProps = state => ({
  products: state.products,
  loading: state.loading,
  error: state.error,
  customers: state.customers
});


export default connect(mapStateToProps)(MainContainer)
