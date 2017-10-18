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

  updateQuery (param) {
    if (param === '') {
      this.setState({queryResults: [], query: ''})
    } else {
      this.onSearch(param).then(results => {
        this.setState({queryResults: results, query: param})
      })
      .catch(() => {
        this.setState({queryResults: [], query: param})
      })
    }
  }

  onSearch (query) {
    return BooksAPI.search(query, 20)
  }

  render () {
    return (<div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>Close</Link>
        <div className='search-books-input-wrapper'>
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type='text' placeholder='Search by title or author' value={this.state.query} onChange={(event) => this.updateQuery(event.target.value.trim())} />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {this.state.queryResults && this.state.queryResults.length ? (
            this.state.queryResults.map((book) => {
              return <li key={book.title}><Book book={book} /></li>
            })) : (<div>Did'nt match anything yet!</div>)}
        </ol>
      </div>
    </div>)
  }
}

export default Search
