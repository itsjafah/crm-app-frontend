import React from 'react'


const CategorySelector = ({ products }) => {

  console.log(products);

  return(
    <div>
      <div>
        Select Category
      </div>
      <div>
        <button>Dolls & Action Figures</button>
        <button>Movies</button>
        <button>Books</button>
        <br />
        <button>Toys</button>
        <button>Electronics</button>
        <button>Board Games</button>
      </div>
    </div>
  )
}

export default CategorySelector
