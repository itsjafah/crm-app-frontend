import React, { Component } from 'react'
import { connect } from 'react-redux'

const ORDERS_API = 'http://localhost:3000/api/v1/orders'

class OrderForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(e);
      fetch(ORDERS_API, {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 1,
          customer_id: this.props.viewThisCustomer.id,
          quantity: this.props.quantity,
          total: this.props.total,
          date: this.props.date,
          product_id: this.props.selectedProduct.id
        })
      })
  }

  render(){
    return(
      <form onSubmit={e => this.handleSubmit(e.target.value)}>
      <div className="sixteen wide column"> Customer
      <select className="ui dropdown" onChange={ (event)=> this.props.handleSelectCustomer(event.target.value)} >
      {this.props.customers.map((customer, i) => {

        return (
          <option
          key={i}
          className="item"
          value={customer}>
          {customer.name}
          </option>
        )
      })}
      </select>
      </div>
      <div className="sixteen wide column"> Product
      <select className="ui dropdown" onChange={ (event)=> this.props.handleSelectProduct(event.target.value)} >
      {this.props.products.map((product) => {
        return (
          <option
          key={product.id}
          className="item"
          placeholder="Customer Name"
          value={product.id}>
          {product.name}
          </option>
        )
      })}
      </select>
      </div>
      <label>
      Price:
      <input type="number" name="name" value={this.props.selectedProduct ? this.props.selectedProduct[0].price : ""}/>
      </label>
      <label>
      SKU:
      <input type="number" name="name" value={this.props.selectedProduct ? this.props.selectedProduct[0].id : ""}/>
      </label>
      <label>
      Qty:
      <input type="number" name="name" onChange={e => this.props.handleQuantityChange(e.target.value)}/>
      </label>
      <label>
      Total:
      <input type="number" name="name" value={this.props.quantity && this.props.selectedProduct ? (this.props.selectedProduct[0].price * this.props.quantity) : ""}/>
      </label>
      <br />
      <br />
      <label>
      Order Total:
      <input type="number" name="name" />
      </label>
      <br />
      <input type="submit" value="Submit" />
      </form>
    )

  }
}

const mapStateToProps = (state) => ({
  state: state.selectedCompany,
  customers: state.customers,
  products: state.products,
  selectedProduct: state.selectedProduct,
  selectedCustomerId: state.selectedCustomerId,
  quantity: state.quantity,
  inputValues: state.inputValues,
  viewThisCustomer: state.viewThisCustomer
})

const mapDispatchToProps = (dispatch) => ({
  handleSelectCustomer: (customer) => dispatch({
    type: "HANDLE_SELECT_CUSTOMER",
    payload: customer
  }),
  handleSelectProduct: (productId) => dispatch({
    type: "HANDLE_SELECT_PRODUCT",
    payload: productId
  }),
  handleQuantityChange: (quantity) => dispatch({
    type: "HANDLE_QUANTITY_INPUT",
    payload: parseInt(quantity)
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

// start with 3 line items for entry
// after the 3rd line, auto generate new input line item
