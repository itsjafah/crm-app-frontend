import React, { Component } from 'react'
import OrderFormContainer from './OrderFormContainer'
import UserDashboardContainer from './UserDashboardContainer'
import CategorySelector from './CategorySelector'
import ProductsContainer from './ProductsContainer'
import CustomerDashboardContainer from './CustomerDashboardContainer'
import Sidebar from './Sidebar'
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";
import { fetchCustomers } from "../actions/customerActions"
import { fetchNotes } from "../actions/noteActions"
import { fetchOrders } from "../actions/orderActions"
import { fetchUsers } from "../actions/userActions"
import { fetchOrderedProducts } from "../actions/orderedProductActions"

class MainContainer extends Component {

  componentDidMount() {
    this.props.dispatch(fetchProducts())
    this.props.dispatch(fetchCustomers())
    this.props.dispatch(fetchNotes())
    this.props.dispatch(fetchOrders())
    this.props.dispatch(fetchUsers())
    this.props.dispatch(fetchOrderedProducts())
  }

  renderContent = () => {

    if (this.props.createOrder === true) {
      return <OrderFormContainer />
    } else if (this.props.openDashboard === true ) {
      return <UserDashboardContainer customers={this.props.customers}/>
    } else if (this.props.viewProducts === true && this.props.products !== undefined) {
      return <CategorySelector
                products={this.props.products}/>
    } else if (this.props.productSelected === true) {
      return <ProductsContainer products={this.props.products}/>
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
        <Sidebar />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  viewProducts: state.viewProducts,
  createOrder: state.createOrder,
  openDashboard: state.openDashboard,
  customers: state.customers,
  products: state.products,
  viewThisCustomer: state.viewThisCustomer,
  products: state.products,
  loading: state.loading,
  error: state.error,
  customers: state.customers,
  notes: state.customers,
  productSelected: state.productSelected,
  orders: state.orders,
  users: state.users,
  addThisProductToOrder: state.addThisProductToOrder,
  orderedProducts: state.orderedProducts
})


export default connect(mapStateToProps)(MainContainer)
