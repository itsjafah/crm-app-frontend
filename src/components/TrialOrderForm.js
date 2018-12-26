import React from 'react'
import { connect } from 'react-redux'

class TrialOrderForm extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      customers: [],
      selectedCustomer: '',
      selectedProduct: '',
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

  // handleProductNameChange = (evt) => (idx) => {
  //   console.log('hello');
  //   const newProducts = this.state.productsOnOrder.map((product, sidx) => {
  //     if (idx !== sidx) return product
  //     return { ...product, product: evt.target.value, };
  //   });
  //
  //   this.setState({ productsOnOrder: newProducts })
  // }

  handleProductNameChange = (productId) => {

    const selectedProduct = this.props.products.filter(product => product.id == productId)

    const newProducts = this.state.productsOnOrder.map((product) => {
      return { ...product, product: selectedProduct[0].name }
    });

    this.setState({ productsOnOrder: newProducts, selectedProduct: selectedProduct }, () => console.log(selectedProduct))
  }

  handlePriceChange = (idx) => (evt) => {
    console.log(idx);
    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, price: evt.target.value, };
    });

    this.setState({ productsOnOrder: newProducts });
  }

  handleSkuChange = (idx) => (evt) => {
    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, sku: evt.target.value, };
    });

    this.setState({ productsOnOrder: newProducts }, () => console.log(this.state.productsOnOrder));
  }

  handleQtyChange = (idx) => (evt) => {
    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, qty: evt.target.value, };
    });

    this.setState({ productsOnOrder: newProducts }, () => console.log(this.state.productsOnOrder));
  }

  handleTotalChange = (idx) => (evt) => {
    const newProducts = this.state.productsOnOrder.map((product, sidx) => {
      if (idx !== sidx) return product
      return { ...product, total: evt.target.value, };
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
    this.setState({ productsOnOrder: this.state.productsOnOrder.filter((s, sidx) => idx !== sidx) });
  }

  // <input
  //   type="text"
  //   placeholder="Company name, e.g. Sean's Love Shack"
  //   value={this.state.customer}
  //   onChange={this.handleCompanyChange}
  // />

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
            <select className="ui dropdown" onChange={ (event) => this.handleProductNameChange(event.target.value)} >
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
              onChange={this.handleSkuChange(idx)}
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
              onChange={this.handleTotalChange(idx)}
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
