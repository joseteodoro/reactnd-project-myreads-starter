import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './shelf'
import shelves from './shelves'

import * as BooksAPI from '../BooksAPI'

class MyReads extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }

  split (books) {
    let splited = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }

    books.forEach((book) => {
      splited[book.shelf].push(book)
    })
    return splited
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      this.setState(this.split(books))
    })
  }

  render () {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            {shelves.map((item) => {
              return <Shelf key={`${item.key}`} books={this.state[item.key]} title={`${item.value}`} />
            })}
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }

}

export default MyReads
