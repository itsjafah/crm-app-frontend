import React from 'react'

const OrderForm = () => {
  return(
    <form>
      <label>
        Company:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Item:
        <input type="text" name="name" />
      </label>
      <label>
        Price:
        <input type="text" name="name" />
      </label>
      <label>
        SKU:
        <input type="text" name="name" />
      </label>
      <label>
        Qty:
        <input type="number" name="name" />
      </label>
      <label>
        Total:
        <input type="text" name="name" />
      </label>
      <br />
      <br />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default OrderForm

// start with 3 line items for entry
// after the 3rd line, auto generate new input line item
