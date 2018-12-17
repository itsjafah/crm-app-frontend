import React from 'react'
import Electronic from './Electronic'

const ElectronicsContainer = ({ products }) => {

  const filteredElectronics = products.filter( product => product.category === "Electronics")

  const electronic = filteredElectronics.map( electronic => {
    return <Electronic electronic={electronic} key={electronic.id}/>
  })

  return(
    <div>Electronics container{electronic}</div>
  )

}

export default ElectronicsContainer
