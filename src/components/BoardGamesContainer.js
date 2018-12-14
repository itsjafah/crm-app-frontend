import React from 'react'
import BoardGame from './BoardGame'

const BoardGamesContainer = ({ products }) => {

  const filteredBoardGames = products.filter( product => product.category === "Board Games")

  const boardGame = filteredBoardGames.map( boardGame => {
    return <BoardGame boardGame={boardGame} key={boardGame.id}/>
  })

  return(
    <div>{boardGame}</div>
  )

}

export default BoardGamesContainer
