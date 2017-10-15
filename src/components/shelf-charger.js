import React from 'react'

export default (props) => (
  <div className="book-shelf-changer">
    <select>
      <option value="none" disabled>Move to...</option>
      {props.items.map((item) => {
        return <option value={`${item.key}`}>{`${item.value}`}</option>
      })}
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
    </select>
  </div>
)
