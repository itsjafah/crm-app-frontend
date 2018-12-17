import React from 'react'
import DollOrActionFigure from './DollOrActionFigure'

const DollsActionFiguresContainer = ({ products }) => {

  const filteredDollsActionFigures = products.filter( product => product.category === "Dolls & Action Figures")

  const dollOrActionFigure = filteredDollsActionFigures.map( dollOrActionFigure => {
    return <DollOrActionFigure dollOrActionFigure={dollOrActionFigure} key={dollOrActionFigure.id}/>
  })

  return(
    <div>Doll or Action Figure Container{dollOrActionFigure}</div>
  )

}

export default DollsActionFiguresContainer
