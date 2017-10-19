import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './shelf'
import shelves from './shelves'

const MyReads = (props) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>MyReads</h1>
    </div>
    <div className='list-books-content'>
      <div>
        {shelves.filter((item) => item.key !== 'outOfShelves')
          .map((item) => {
            return <Shelf onChangeShelf={props.onChangeShelf} key={`${item.key}`} books={props.state[item.key]} title={`${item.value}`} />
          })}
      </div>
    </div>
    <div className='open-search'>
      <Link to='/search'>Add a book</Link>
    </div>
  </div>
)

MyReads.propTypes = {
  state: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default MyReads
