import React from 'react'

const UserIndividualProductSalesInfo = (props) => {

//   const handleWeightSort = () => {
//   const hogsByWeight = hogs.sort( function(a, b){
//       return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']-b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
//   })
// }

const orderedProducts = props.orderedProducts.map( orderedProduct => {
  return orderedProduct.product.name
})

console.log(orderedProducts);

  console.log(props);

    return (
      <div>
        <ul>
          <li>
            {orderedProducts}
          </li>
        </ul>
      </div>
    )
  }

export default UserIndividualProductSalesInfo
