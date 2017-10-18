import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './shelf'
import shelves from './shelves'

export default (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        {shelves.map((item) => {
          return <Shelf onChangeShelf={props.onChangeShelf} key={`${item.key}`} books={props.state[item.key]} title={`${item.value}`} />
        })}
      </div>
    </div>
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)
