import React from 'react'
import PropTypes from 'prop-types'
import ShelveCharger from './shelf-charger'
import shelves from './shelves'

const Book = (props) => (
  <div className='book'>
    <div className='book-top'>
      <div className='book-cover' style={{width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks && props.book.imageLinks.smallThumbnail})`}} />
      <ShelveCharger onChangeShelf={props.onChangeShelf} shelves={shelves} book={props.book} />
    </div>
    <div className='book-title'>{props.book.title}</div>
    <div className='book-authors'>{props.book.authors}</div>
  </div>
)

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Book
