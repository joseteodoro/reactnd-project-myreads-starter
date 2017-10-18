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
    this.onChangeShelf = this.onChangeShelf.bind(this)
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

  onChangeShelf (book, targetShelf) {
    console.log(`Calling using ${book}  and ${targetShelf}`)
    const sourceShelf = book.shelf
    BooksAPI.update(book, targetShelf)
      .then(() => {
        this.setState(prevState => {
          const src = prevState[sourceShelf].filter(b => (b.title !== book.title))
          const tgt = prevState[targetShelf].concat(book)
          let state = {}
          Object.assign(state, prevState)
          state[sourceShelf] = src
          state[targetShelf] = tgt.sort()
          return state
        })
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
              return <Shelf onChangeShelf={this.onChangeShelf} key={`${item.key}`} books={this.state[item.key]} title={`${item.value}`} />
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
