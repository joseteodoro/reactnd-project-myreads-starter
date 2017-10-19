import React from 'react'
import PropTypes from 'prop-types'

const ShelfCharger = (props) => (
  <div className='book-shelf-changer'>
    <select value={props.book.shelf} onChange={(event) => {
      props.onChangeShelf(props.book, event.target.value)
    }}>
      <option disabled value='none'>Move to...</option>
      {props.shelves.map((item) => {
        return <option key={`${item.key}`} value={`${item.key}`}>{`${item.value}`}</option>
      })}
    </select>
  </div>
)

ShelfCharger.propTypes = {
  book: PropTypes.object.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ShelfCharger
