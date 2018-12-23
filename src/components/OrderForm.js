import React, { Component } from 'react'
import { connect } from 'react-redux'

const ORDERS_API = 'http://localhost:3000/api/v1/orders'

class OrderForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      chosenProduct: null,
      quantity: null
    }
  }

  handleChosenProduct = (productId) => {
    const chosenProduct = this.props.products.filter(product => product.id == productId)
    this.setState({ chosenProduct: chosenProduct, quantity: 1})
  }

  handleQuantityChange = (quantity) => {
    this.setState({
      quantity: quantity
    })
  }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(e);
  //     fetch(ORDERS_API, {
  //       method: 'POST',
  //       headers: {
  //         'Accepts': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         user_id: 1,
  //         customer_id: this.props.viewThisCustomer.id,
  //         quantity: this.props.quantity,
  //         total: this.props.total,
  //         date: this.props.date,
  //         product_id: this.props.selectedProduct.id
  //       })
  //     })
  // }

  render(){
    console.log("Order Form", this.props);
    return(
      <form>
        <div className="sixteen wide column"> Product
          <select className="ui dropdown" onChange={ (event)=> this.handleChosenProduct(event.target.value)} >
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
            <input type="number" name="name" value={this.state.chosenProduct ? this.state.chosenProduct[0].price : ""}/>
        </label>
        <label>
          SKU:
            <input type="number" name="name" value={this.state.chosenProduct ? this.state.chosenProduct[0].id : ""}/>
        </label>
        <label>
          Qty:
            <input type="number" name="name" defaultValue= {this.state.chosenProduct ? 1 : ""} onChange={e => this.handleQuantityChange(e.target.value)}/>
        </label>
        <label>
          Total:
            <input type="number" name="name" value={ this.state.chosenProduct ? (this.state.chosenProduct[0].price * this.state.quantity) : ""}/>
        </label>
      </form>
    )

  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  products: state.products,
  selectedCustomerId: state.selectedCustomerId,
  quantity: state.quantity,
  inputValues: state.inputValues,
  viewThisCustomer: state.viewThisCustomer,
  price: state.price
})

const mapDispatchToProps = (dispatch) => ({
  handleSelectCustomer: (customer) => dispatch({
    type: "HANDLE_SELECT_CUSTOMER",
    payload: customer
  }),
  handleSelectProduct: (productId) => dispatch({
    type: "HANDLE_SELECT_PRODUCT",
    payload: productId
  })
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm)

// start with 3 line items for entry
// after the 3rd line, auto generate new input line item
