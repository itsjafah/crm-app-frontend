import React from 'react'
import Movie from './Movie'

const MoviesContainer = ({ products }) => {

  const filteredMovies = products.filter( product => product.category === "Movies")

  const movie = filteredMovies.map( movie => {
    return <Movie movie={movie} key={movie.id}/>
  })

  return(
    <div>Movies container{movie}</div>
  )

}

export default MoviesContainer
