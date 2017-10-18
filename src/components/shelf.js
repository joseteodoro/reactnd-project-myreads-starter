import React from 'react'
import Book from './book'

export default (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.map((book) => {
          return <li key={book.title}><Book book={book} onChangeShelf={props.onChangeShelf} /></li>
        })}
      </ol>
    </div>
  </div>
)
