import React from 'react'
import BoardGame from './BoardGame'
import { connect } from 'react-redux'

const BoardGamesContainer = ({ products }) => {

  const filteredBoardGames = products.filter( product => product.category === "Board Games")

  const boardGame = filteredBoardGames.map( boardGame => {
    return <BoardGame boardGame={boardGame} key={boardGame.id}/>
  })

  return(
    <div>{boardGame}</div>
  )

}

const mapStateToProps = (state) => ({
  products: state.products
})

export default connect(mapStateToProps)(BoardGamesContainer)
