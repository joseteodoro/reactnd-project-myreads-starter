import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

class Search extends React.Component {

  state = {
    query: '',
    queryResults : [],
  }

  updateQuery (param) {
    if (param === '') {
      this.setState({ queryResults: [], query: ''})
    } else {
      this.onSearch(param).then(results => {
        this.setState({ queryResults: results, query: param})
      })
    }
  }

  onSearch (query) {
      return BooksAPI.search(query, 20)
  }

  render () {
    return (<div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to='/'>Close</Link>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) =>  this.updateQuery(event.target.value.trim())}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {JSON.stringify(this.state.queryResults)}
        </ol>
      </div>
    </div>)
  }


}

export default Search
