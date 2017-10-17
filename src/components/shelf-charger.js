import React from 'react'

export default (props) => (
  <div className='book-shelf-changer'>
    <select>
      <option value='none' disabled>Move to...</option>
      {props.shelves.map((item) => {
        return <option key={`${item.key}`} value={`${item.key}`}>{`${item.value}`}</option>
      })}
    </select>
  </div>
)
