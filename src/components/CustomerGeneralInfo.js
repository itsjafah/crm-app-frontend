import React from 'react'
import { connect } from 'react-redux'

const CustomerGeneralInfo = (props) => {

  console.log(props);

  return(
    <div className="customer-general-info-container">
      <div className='customer-info-doodads-wrapper'>
        <div className='customer-text-and-photo-container'>
          <div className='customer-logo-container'>
            <img src={props.viewThisCustomer.image} className='customer-logo' height='275' width='320'/>
          </div>
          <div className='customer-general-info-text-div'>
            <p className="customer-general-info-text">
              {props.viewThisCustomer.name}
              <br />
              Address: {props.viewThisCustomer.address}
              <br />
              Customer Rank: {props.viewThisCustomer.rank}
              <br />
              2019 Sales Goal: ${props.viewThisCustomer.annual_goal}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  viewThisCustomer: state.viewThisCustomer
})


export default connect(mapStateToProps)(CustomerGeneralInfo)
