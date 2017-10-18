import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './book'

class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      query: '',
      queryResults: []
    }
  }

  componentDidMount () {
    this.textInput.focus()
  }

  updateQuery (param) {
    if (param === '') {
      this.setState({queryResults: [], query: ''})
    } else {
      this.onSearch(param).then(results => {
        if (results.length) {
          this.setState({queryResults: results, query: param})
        } else {
          this.setState({queryResults: [], query: param})
        }
      })
      .catch(() => {
        this.setState({queryResults: [], query: param})
      })
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
              return <li key={book.id}><Book onChangeShelf={this.props.onChangeShelf} book={book} /></li>
            })) : (<div>Did'nt match anything yet!</div>)}
        </ol>
      </div>
    </div>)
  }
}

export default Search
