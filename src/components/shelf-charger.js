import React from 'react'

export default (props) => (
  <div className='book-shelf-changer'>
    <select onChange={(event) => {
      props.onChangeShelf(props.book, event.target.value)
    }}>
      <option defaultValue value='none'>Move to...</option>
      {props.shelves.filter((item) => {
        return item.key !== props.book.shelf
      })
      .map((item) => {
        return <option key={`${item.key}`} value={`${item.key}`}>{`${item.value}`}</option>
      })}
    </select>
  </div>
)
