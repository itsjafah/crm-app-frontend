import React from 'react'
import { Table } from 'semantic-ui-react'
import UserBestSellerTable from './UserBestSellerTable'
import { connect } from 'react-redux'

const UserBestSellersContainer = (props) => {

  // puttzing around with filtering most ordered items

  var productWithQuantity = props.orderedProducts.map( orderedProduct => {
    return {name: orderedProduct.product.name, quantity: orderedProduct.quantity, category: orderedProduct.product.category, image: orderedProduct.product.image_url}
  })

  var temp = {};
  var obj = null;
  for(var i=0; i < productWithQuantity.length; i++) {
    obj=productWithQuantity[i];

     if(!temp[obj.name]) {
         temp[obj.name] = obj;
     } else {
         temp[obj.name].quantity += obj.quantity;
     }
  }


  var productsWithOrderQuantities = [];
  for (var prop in temp)
  productsWithOrderQuantities.push(temp[prop]);

  console.log(productsWithOrderQuantities);

  const bestSellers = productsWithOrderQuantities.sort(function (a, b) {
    return b.quantity - a.quantity;
  })

  // const topTenBestSellers = bestSellers.slice(0, 10)

  const bestSeller = bestSellers.slice(0, 10).map( bestSeller => {
    return <UserBestSellerTable bestSeller={bestSeller}/>
  })

  return (
    <div className='user-best-sellers-table-container-component'>
      <div className='user-best-sellers-category-header'>
        <h1>
          Top 10 Sellers
        </h1>
      </div>
      <div className='best-sellers-doodads-wrapper'>
        <div className='user-best-seller-table'>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h2>Image</h2></Table.HeaderCell>
                <Table.HeaderCell><h2>Product</h2></Table.HeaderCell>
                <Table.HeaderCell><h2>Quantity</h2></Table.HeaderCell>
                <Table.HeaderCell><h2>Category</h2></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {bestSeller}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  orderedProducts: state.orderedProducts
})

export default connect(mapStateToProps)(UserBestSellersContainer)
