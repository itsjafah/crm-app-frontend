import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

const ORDERS_API = 'http://localhost:3000/api/v1/orders'
const ORDERED_PRODUCTS_API = 'http://localhost:3000/api/v1/ordered_products'

class TrialOrderForm extends Component {
  constructor() {
    super()
    this.state = {
      selectedCustomer: null,
      productsOnOrder:
        [{
          product: '',
          price: null,
          sku: null,
          qty: null,
          total: null
        }]
    }
  }

  // Select Customer Dropdown START

  handleSelectCustomer = (customerId) => {
    const selectedCustomer = this.props.customers.filter( customer => customer.id == customerId)
      this.setState({
        selectedCustomer: selectedCustomer
      })
  }

  // Select Customer Dropdown END

  // *************

  // Select Product from Dropdown START

  handleProductNameChange = (idx) => (e) => {

    const selectedProduct = this.props.products.filter(product => product.id == e.target.value)

    const newProducts = this.state.productsOnOrder.map((product, pidx) => {
      if (idx !== pidx) return product
      return { ...product,
                  id: selectedProduct[0].id,
                  product: selectedProduct[0].name,
                  price: selectedProduct[0].price,
                  sku: selectedProduct[0].sku,
                  qty: 1,
                  total: (selectedProduct[0].price * 1)
                }
    })

    this.setState({ productsOnOrder: newProducts })

  }

  // Select Product from Dropdown END

  // *****************

  // Change Quantity of Product on Order START

  handleQtyChange = (idx) => (e) => {
    const newProducts = this.state.productsOnOrder.map((product, pidx) => {
      if (idx !== pidx) return product
      return { ...product, qty: e.target.value, total: ((e.target.value)*product.price) }
    })

    this.setState({ productsOnOrder: newProducts })
  }

  // Change Quantity of Product on Order END

  // *****************

  // Add New Product to the Order START

  handleAddProductToOrder = () => {
    this.setState({ productsOnOrder: this.state.productsOnOrder.concat([{ product: '', price: null, sku: null, qty: null, total: null }]) })
  }

  // Add New Product to the Order END

  // ***************

  // Remove Product from the Order START

  handleRemoveProduct = (idx) => () => {
    this.setState({
      productsOnOrder: this.state.productsOnOrder.filter((product, pidx) => idx !== pidx)
    })
  }

  // Remove Product from the Order END

  // *********************

  // Submit Order - POST Request

  handleSubmit = (e) => {

    let initialValue = 0;

    const orderTotal = this.state.productsOnOrder.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.total;
      }, initialValue)


    e.preventDefault()
    alert(`Order Placed!`);
      fetch(ORDERS_API, {
        method: 'POST',
        headers: {
          'Accepts': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: 1,
          customer_id: this.state.selectedCustomer[0].id,
          total: orderTotal
        })
      })
      .then(r => r.json())
      .then( order => {
        this.state.productsOnOrder.map(productObject => {
          this.addOrderedProductToDB(productObject, order.id)
        })
      })
  }

  addOrderedProductToDB = (productObject, orderId) => {
    fetch(ORDERED_PRODUCTS_API, {
        method: 'POST',
        headers: {
            'Accepts': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              order_id: orderId,
              product_id: productObject.id,
              quantity: productObject.qty
            })
          })
          .then( () => this.getOrderedProducts())
          .then( () => this.getOrders())
}


  getOrderedProducts = () => {
    fetch(ORDERED_PRODUCTS_API)
      .then(r => r.json())
      .then(r => {
        this.props.setOrderedProducts(r)
      })
  }

  getOrders = () => {
    fetch(ORDERS_API)
      .then(r => r.json())
      .then(r => {
        this.props.setOrders(r)
      })
  }

  render() {

    let initialValue = 0;

    const orderTotal = this.state.productsOnOrder.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue.total;
      }, initialValue)

    return (
        <form
          className='order-form-container'
          onSubmit={this.handleSubmit}>

          <h2 className='order-form-select-customer-header'> Select Customer </h2>

          <div className="select-customer-dropdown">
            <select onChange={ (event)=> this.handleSelectCustomer(event.target.value)} >
            <option value="" selected disabled hidden>Choose customer</option>
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

          <div className='form-wrapper'>
          <h2>Order {this.state.selectedCustomer ? `for ${this.state.selectedCustomer[0].name}` : ""}</h2>

          <div className='product-row'>

                  {this.state.productsOnOrder.map((product, idx) => (

                    <div className="form-row-input">
                    <select className="ui-dropdown" onChange={ this.handleProductNameChange(idx)} >
                    <option value="" selected disabled hidden>Choose product</option>
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


                      <input
                        type="number"
                        placeholder={`Price`}
                        value={product.price}
                      />


                      <input
                        type="number"
                        placeholder={`SKU`}
                        value={product.sku}
                      />

                      <input
                        type="number"
                        placeholder={`Qty`}
                        value={product.qty}
                        onChange={this.handleQtyChange(idx)}
                      />

                      <input
                        type="number"
                        placeholder={`Total`}
                        value={product.total}
                      />
                      <button type="button" onClick={this.handleRemoveProduct(idx)} className="small">-</button>
                    </div>
                  ))}

                  </div>
                  <button type="button" onClick={this.handleAddProductToOrder} className="small">Add Product</button>
                  <br />
                  <br />
                  <div className='order-total'>
                    <h2>
                      Order Total: <p>${orderTotal}</p>
                    </h2>
                  </div>

                  <Button
                    color='green'
                    className='grid-item'
                    size='medium'
                    variant="outlined">
                      Create Order
                  </Button>
          </div>
                </form>
    )
  }
}


const mapStateToProps = (state) => ({
  customers: state.customers,
  products: state.products,
  orderedProducts: state.orderedProducts
})

const mapDispatchToProps = (dispatch) => ({
  setOrderedProducts: (ordered_products) => dispatch({
    type: 'SET_ORDERED_PRODUCTS',
    payload: ordered_products
  }),
  setOrders: (orders) => dispatch({
    type: 'SET_ORDERS',
    payload: orders
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(TrialOrderForm)
