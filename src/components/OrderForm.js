import React from 'react'
import { connect } from 'react-redux'

const OrderForm = (props) => {
  console.log(props);
  return(
    <form>
    <div className="sixteen wide column"> Customer
      <select className="ui dropdown" onChange={ (event)=> props.handleSelectCustomer(event.target.value)} >
        {props.customers.map((customer, i) => {

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
      <select className="ui dropdown" onChange={ (event)=> props.handleSelectProduct(event.target.value)} >
        {props.products.map((product) => {
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
        <input type="number" name="name" value={props.selectedProduct ? props.selectedProduct[0].price : ""}/>
      </label>
      <label>
        SKU:
        <input type="number" name="name" value={props.selectedProduct ? props.selectedProduct[0].id : ""}/>
      </label>
      <label>
        Qty:
        <input type="number" name="name" onChange={e => props.handleQuantityChange(e.target.value)}/>
      </label>
      <label>
        Total:
        <input type="number" name="name" value={props.quantity && props.selectedProduct ? (props.selectedProduct[0].price * props.quantity) : ""}/>
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

const mapStateToProps = (state) => ({
  state: state.selectedCompany,
  customers: state.customers,
  products: state.products,
  selectedProduct: state.selectedProduct,
  selectedCustomerId: state.selectedCustomerId,
  quantity: state.quantity
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
