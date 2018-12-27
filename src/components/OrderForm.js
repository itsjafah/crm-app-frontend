import React from 'react'
import { connect } from 'react-redux'

class TrialOrderForm extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      customers: [],
      selectedCustomer: '',
      productsOnOrder: [{ product: '', price: null, sku: null, qty: null, total: null }]
    }
  }

  handleSelectCustomer = (customerId) => {
    const selectedCustomer = this.props.customers.filter( customer => customer.id == customerId)
    this.setState({ selectedCustomer: selectedCustomer })
  }

  handleProductNameChange = (idx) => (e) => {

    const selectedProduct = this.props.products.filter(product => product.id == e.target.value)

    const newProducts = this.state.productsOnOrder.map((product, pidx) => {
      if (idx !== pidx) return product
      return { ...product,
                  product: selectedProduct[0].name,
                  price: selectedProduct[0].price,
                  sku: selectedProduct[0].sku,
                  qty: 1,
                  total: (selectedProduct[0].price * 1)
                }
    })

    this.setState({ productsOnOrder: newProducts })

  }

  handleQtyChange = (idx) => (e) => {
    const newProducts = this.state.productsOnOrder.map((product, pidx) => {
      if (idx !== pidx) return product
      return { ...product, qty: e.target.value, total: ((e.target.value)*product.price) }
    })

    this.setState({ productsOnOrder: newProducts })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // const { name, productsOnOrder } = this.state;
    alert(`Sup`);
  }

  handleAddProductToOrder = () => {
    this.setState({ productsOnOrder: this.state.productsOnOrder.concat([{ product: '', price: null, sku: null, qty: null, total: null }]) })
  }

  handleRemoveProduct = (idx) => () => {
    this.setState({
      productsOnOrder: this.state.productsOnOrder.filter((product, pidx) => idx !== pidx)
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



  render() {

    let initialValue = 0;

    const orderTotal = this.state.productsOnOrder.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.total;
      }, initialValue)

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <select className="ui dropdown" onChange={ (event)=> this.handleSelectCustomer(event.target.value)} >
          {this.props.customers.map((customer, i) => {
            return (
              <option
              key={i}
              className="item"
              value={customer.id}>
              {customer.name}
              </option>
            )
          })}
          </select>
        </div>

        <h4>Products</h4>

        {this.state.productsOnOrder.map((product, idx) => (
          <div className="product">
          <div className="sixteen wide column"> Name
            <select className="ui dropdown" onChange={ this.handleProductNameChange(idx)} >
            {this.props.products.map((product) => {
              return (
                <option
                key={product.id}
                className="item"
                value={product.id}>
                {product.name}
                </option>
              )
            })}
            </select>
          </div>

            Price:

            <input
              type="number"
              placeholder={`Price`}
              value={product.price}
            />

            SKU:

            <input
              type="number"
              placeholder={`SKU`}
              value={product.sku}
            />

            QTY:

            <input
              type="number"
              placeholder={`Qty`}
              value={product.qty}
              onChange={this.handleQtyChange(idx)}
            />

            Total:

            <input
              type="number"
              placeholder={`Total`}
              value={product.total}
            />
            <button type="button" onClick={this.handleRemoveProduct(idx)} className="small">-</button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddProductToOrder} className="small">Add Product</button>
        <br />
        <br />
        Order Total: <p>${orderTotal}</p>
        <br />
        <button>Submit Order</button>
      </form>
    )
  }
}


const mapStateToProps = (state) => ({
  customers: state.customers,
  products: state.products
})

export default connect(mapStateToProps)(TrialOrderForm)
