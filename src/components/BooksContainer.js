import React from 'react'
import Book from './Book'

const BooksContainer = ({ products }) => {

  const filteredBooks = products.filter( product => product.category === "Books")

  const book = filteredBooks.map( book => {
    return <Book book={book} key={book.id}/>
  })

  return(
    <div>{book}</div>
  )

}

export default BooksContainer
