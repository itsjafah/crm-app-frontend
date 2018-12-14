import React, { Component } from 'react'
import OrderForm from './OrderForm'
import Dashboard from './Dashboard'
import CategorySelector from './CategorySelector'
import DollsActionFiguresContainer from './DollsActionFiguresContainer'
import MoviesContainer from './MoviesContainer'
import BooksContainer from './BooksContainer'
import ToysContainer from './ToysContainer'
import ElectronicsContainer from './ElectronicsContainer'
import BoardGamesContainer from './BoardGamesContainer'

class MainContainer extends Component {

  renderContent = () => {

    const { viewProducts, createOrder, openDashboard, customers, products, viewDollsActionFigures, handleViewDollsActionFigures, handleViewMovies, viewMovies, handleViewBooks, viewBooks, viewToys, handleViewToys, viewElectronics, handleViewElectronics, viewBoardGames, handleViewBoardGames } = this.props

    if (createOrder === true) {
      return <OrderForm />
    } else if (openDashboard === true ) {
      return <Dashboard customers={customers}/>
    } else if (viewProducts === true && products !== undefined) {
      return <CategorySelector
                products={products}
                handleViewDollsActionFigures={handleViewDollsActionFigures}
                handleViewMovies={handleViewMovies}
                handleViewBooks={handleViewBooks}
                handleViewToys={handleViewToys}
                handleViewElectronics={handleViewElectronics}
                handleViewBoardGames={handleViewBoardGames}/>
    } else if (viewDollsActionFigures === true) {
      return <DollsActionFiguresContainer products={products}/>
    } else if (viewMovies === true) {
      return <MoviesContainer products={products}/>
    } else if (viewBooks === true) {
      return <BooksContainer products={products}/>
    } else if (viewToys === true) {
      return <ToysContainer products={products}/>
    } else if (viewElectronics === true) {
      return <ElectronicsContainer products={products}/>
    } else if (viewBoardGames === true) {
      return <BoardGamesContainer products={products}/>
    } else {
      return "login page soon"
    }
  }

  render(){



    return(
      <div>
        {this.renderContent()}
      </div>
    )
  }

}


export default MainContainer
