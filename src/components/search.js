import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as BooksAPI from '../BooksAPI'
import Book from './book'

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      query: '',
      queryResults: [],
      currentlyReadingSet: new Set(props.books.currentlyReading.map((book) => book.id)),
      wantToReadSet: new Set(props.books.wantToRead.map((book) => book.id)),
      readSet: new Set(props.books.read.map((book) => book.id))
    }
    this.changeShelf = this.changeShelf.bind(this)
  }

  changeShelf (book, target) {
    this.setState((prevState) => {
      const newState = Object.assign({}, prevState)
      if (book.shelf) {
        newState[`${book.shelf}Set`].delete(book.id)
      }
      newState[`${target}Set`].add(book.id)
      return newState
    })
    this.props.onChangeShelf(book, target)
  }

  componentDidMount () {
    this.textInput.focus()
  }

  fillAdditionalData (books) {
    return books.map((book) => {
      if (this.state.currentlyReadingSet.has(book.id)) {
        book.shelf = 'currentlyReading'
      }
      if (this.state.wantToReadSet.has(book.id)) {
        book.shelf = 'wantToRead'
      }
      if (this.state.readSet.has(book.id)) {
        book.shelf = 'read'
      }
      return book
    })
  }

  updateQuery (param) {
    if (param !== '') {
      this.onSearch(param).then(results => {
        if (results.length) {
          this.setState({queryResults: this.fillAdditionalData(results), query: param})
        } else {
          this.setState({queryResults: [], query: param})
        }
      })
    } else {
      this.setState({queryResults: [], query: ''})
    }
  }

  onSearch (query) {
    return BooksAPI.search(query, 25)
  }

  render () {
    return (<div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>Close</Link>
        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title or author' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value.trim())} ref={(input) => { this.textInput = input }} />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {this.state.queryResults && this.state.queryResults.length ? (
            this.state.queryResults.map((book) => {
              return <li key={book.id}><Book onChangeShelf={this.changeShelf} book={book} /></li>
            })) : (<div>Did'nt match anything yet!</div>)}
        </ol>
      </div>
    </div>)
  }
}

Search.propTypes = {
  onChangeShelf: PropTypes.func.isRequired
}

export default Search
