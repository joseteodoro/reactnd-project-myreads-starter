import React from 'react'
import Book from './book'

export default (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.map((book) => {
          return <li key={book.title}><Book book={{'title': book.title, 'author': book.authors, 'cover': book.imageLinks.smallThumbnail}} /></li>
        })}
      </ol>
    </div>
  </div>
)
