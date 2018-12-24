import React, { Component } from 'react'
import { connect } from 'react-redux'

const ORDERS_API = 'http://localhost:3000/api/v1/orders'

class OrderForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedProduct: null,
      quantity: null,
      orderTotal: []
    }
  }


  handleChosenProduct = (productId) => {

    const selectedProduct = this.props.products.filter(product => product.id == productId)

    this.setState({
      selectedProduct: selectedProduct,
      quantity: 1,
      orderTotal: (selectedProduct[0].price)
    })
  }

  handleQuantityChange = (quantity) => {
    this.setState({
      quantity: quantity,
      orderTotal: this.state.selectedProduct[0].price * quantity
    }, () => console.log(this.state.orderTotal))
  }

//   this.setState(prevState => ({
//   arrayvar: [...prevState.arrayvar, newelement]
// }))

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

    const lineTotals = []

    for (let i = 0; i === this.props.number; i++) {
        lineTotals.push(this.state.orderTotal)
      }

    console.log(lineTotals)

    return(
      <form onChange={null}>
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
            <input type="number" name="name" value={this.state.selectedProduct ? this.state.selectedProduct[0].price : ""}/>
        </label>
        <label>
          SKU:
            <input type="number" name="name" value={this.state.selectedProduct ? this.state.selectedProduct[0].id : ""}/>
        </label>
        <label>
          Qty:
            <input type="number" name="name" defaultValue= {this.state.selectedProduct ? 1 : ""} onChange={e => this.handleQuantityChange(e.target.value)}/>
        </label>
        <label>
          Total:
            <input type="number" name="name" value={ this.state.selectedProduct ? (this.state.selectedProduct[0].price * this.state.quantity) : ""}/>
        </label>
      </form>
    )

  }
}

const mapStateToProps = (state) => ({
  products: state.products
})


export default connect(mapStateToProps)(OrderForm)

// start with 3 line items for entry
// after the 3rd line, auto generate new input line item
