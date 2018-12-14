import React from 'react'


const CategorySelector = ({ products, handleViewDollsActionFigures, handleViewMovies, handleViewBooks, handleViewToys, handleViewElectronics, handleViewBoardGames }) => {

  console.log(products);

  return(
    <div>
      <div>
        Select Category
      </div>
      <div>
        <button onClick={handleViewDollsActionFigures}>Dolls & Action Figures</button>
        <button onClick={handleViewMovies}>Movies</button>
        <button onClick={handleViewBooks}>Books</button>
        <br />
        <button onClick={handleViewToys}>Toys</button>
        <button onClick={handleViewElectronics}>Electronics</button>
        <button onClick={handleViewBoardGames}>Board Games</button>
      </div>
    </div>
  )
}

export default CategorySelector
