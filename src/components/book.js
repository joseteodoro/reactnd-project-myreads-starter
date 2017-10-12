import React from 'react'
import ShelveCharger from './shelve-charger'

export default (props) => (
  <div className="book">
    <div className="book-top">
      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.cover})` }}></div>
      <ShelveCharger book={props.book} />
    </div>
    <div className="book-title">{props.book.title}</div>
    <div className="book-authors">{props.book.author}</div>
  </div>
);
