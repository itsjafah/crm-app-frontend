import React from 'react'
import { connect } from 'react-redux'

class TrialOrderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      customers: [],
      selectedCustomer: '',
      price: null,
      sku: null,
      qty: null,
      total: null,
      productsOnOrder: [{ product: '', price: null, sku: null, qty: null, total: null }]
    }
  }

  handleSelectCustomer = (customerId) => {
    const selectedCustomer = this.props.customers.filter( customer => customer.id == customerId)
    this.setState({ selectedCustomer: selectedCustomer })
  }

  handleProductNameChange = (idx) => (evt) => {

    const selectedProduct = this.props.products.filter(product => product.id == evt.target.value)

    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, product: selectedProduct[0].name, price: selectedProduct[0].price, sku: selectedProduct[0].sku, qty: 1, total: (selectedProduct[0].price * 1)};
    });

    this.setState({ productsOnOrder: newProducts }, ()=>console.log(this.state.productsOnOrder))

  }

  handlePriceChange = (idx) => (evt) => {

    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, price: evt.target.value, };
    });

    this.setState({ productsOnOrder: newProducts });
  }

  handleQtyChange = (idx) => (evt) => {
    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, qty: evt.target.value, total: ((evt.target.value)*product.price), };
    });

    this.setState({ productsOnOrder: newProducts }, () => console.log(this.state.productsOnOrder));
  }

  // handleSubmit = (evt) => {
  //   const { name, productsOnOrder } = this.state;
  //   alert(`Incorporated: ${name} with ${productsOnOrder.length} productsOnOrder`);
  // }

  handleAddProductToOrder = () => {
    this.setState({ productsOnOrder: this.state.productsOnOrder.concat([{ product: '', price: null, sku: null, qty: null, total: null }]) });
  }

  handleRemoveProduct = (idx) => () => {
    this.setState({ productsOnOrder: this.state.productsOnOrder.filter((s, sidx) => idx !== sidx) }, ()=>console.log(this.state.productsOnOrder));
  }

  render() {
    return (
      <form onSubmit={null}>
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
          <div className="sixteen wide column"> Product
            <select className="ui dropdown" onChange={ this.handleProductNameChange(idx)} >
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
            <input
              type="number"
              placeholder={`Price`}
              value={product.price}
              onChange={this.handlePriceChange(idx)}
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
        <button type="button" onClick={this.handleAddProductToOrder} className="small">Add Product</button>
        <button>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers,
  products: state.products
})

export default connect(mapStateToProps)(TrialOrderForm)
