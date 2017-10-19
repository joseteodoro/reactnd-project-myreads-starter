import React from 'react'
import PropTypes from 'prop-types'
import Book from './book'

const Shelf = (props) => (
  <div className='bookshelf'>
    <h2 className='bookshelf-title'>{props.title}</h2>
    <div className='bookshelf-books'>
      <ol className='books-grid'>
        {props.books.map((book) => {
          return <li key={book.id}><Book book={book} onChangeShelf={props.onChangeShelf} /></li>
        })}
      </ol>
    </div>
  </div>
)

Shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Shelf
