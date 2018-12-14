import React from 'react'
import Toy from './Toy'

const ToysContainer = ({ products }) => {

  const filteredToys = products.filter( product => product.category === "Toys")

  const toy = filteredToys.map( toy => {
    return <Toy toy={toy} key={toy.id}/>
  })

  return(
    <div>{toy}</div>
  )

}

export default ToysContainer
