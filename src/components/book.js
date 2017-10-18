import React from 'react'
import ShelveCharger from './shelf-charger'
import shelves from './shelves'

export default (props) => (
  <div className='book'>
    <div className='book-top'>
      <div className='book-cover' style={{width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}} />
      <ShelveCharger onChangeShelf={props.onChangeShelf} shelves={shelves} book={props.book} />
    </div>
    <div className='book-title'>{props.book.title}</div>
    <div className='book-authors'>{props.book.authors}</div>
  </div>
)
