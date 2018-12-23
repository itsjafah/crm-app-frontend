import React from 'react'
import OrderForm from './OrderForm'
import { connect } from 'react-redux'

const OrderFormContainer = (props) => {

  const formRows = []

  for (let i = 0; i < props.numFormRows; i+=1) {
      formRows.push(<OrderForm key={i} number={i}/>)
    }

    console.log('form rows', formRows);

  return(
    <div>
    <div className="sixteen wide column"> Customer
    <select className="ui dropdown" onChange={ (event)=> props.handleSelectCustomer(event.target.value)} >
    {props.customers.map((customer, i) => {
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
    <form>

      {formRows}

      <button onClick={props.handleAddRow}>Add More</button>

      <br />
      <br />

      <label>
        Order Total:
          <input type="number" name="name" />
      </label>
        <br />
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  numFormRows: state.numFormRows,
  selectedCustomer: state.selectedCustomer,
  customers: state.customers,
  selectedProduct: state.selectedProduct
})

const mapDispatchToProps = (dispatch) => ({
  handleSelectCustomer: (customerId) => dispatch({
    type: "HANDLE_SELECT_CUSTOMER",
    payload: customerId
  }),
  handleAddRow: () => dispatch({
    type: "HANDLE_ADD_ROW"
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderFormContainer)
