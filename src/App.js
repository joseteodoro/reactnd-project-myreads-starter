import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Search from './components/search'
import MyReads from './components/list-books'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      '': []
    }
    this.onChangeShelf = this.onChangeShelf.bind(this)
  }

  componentDidMount () {
    BooksAPI.getAll().then((books) => {
      const read = books.filter(e => e.shelf === 'read')
      const wantToRead = books.filter(e => e.shelf === 'wantToRead')
      const currentlyReading = books.filter(e => e.shelf === 'currentlyReading')
      this.setState({read, wantToRead, currentlyReading})
    })
  }

  onChangeShelf (book, targetShelf) {
    const sourceShelf = book.shelf
    book.shelf = targetShelf
    BooksAPI.update(book, targetShelf)
      .then(() => {
        this.setState((prevState) => {
          let newState = {}
          Object.assign(newState, prevState)
          if (sourceShelf) {
            newState[sourceShelf] = prevState[sourceShelf].filter(b => (b.id !== book.id))
          }
          newState[targetShelf] = prevState[targetShelf].concat(book).sort()
          return newState
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <MyReads onChangeShelf={this.onChangeShelf} state={this.state} />
        )} />
        <Route path='/search' render={({ history }) => (
          <Search onChangeShelf={this.onChangeShelf} books={this.state} />
        )} />
      </div>
    )
  }
}

export default BooksApp
