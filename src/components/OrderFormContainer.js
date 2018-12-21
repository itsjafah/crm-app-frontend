import React from 'react'
import OrderForm from './OrderForm'
import { connect } from 'react-redux'

const OrderFormContainer = (props) => {

  // order form containter returns a form
  //

  const handleNewProduct = () => {
    props.formObjects.map( formObject => {
      return
      <div>
      <input type="text" value{formObject.product}=/>
      </div>/>
    })
  }

  return(
    <form>
      <OrderForm />
    </form>
  )
}

const mapStateToProps = (state) => ({
  formObjects: state.formObject
})

export default connect(mapStateToProps)(OrderFormContainer)
