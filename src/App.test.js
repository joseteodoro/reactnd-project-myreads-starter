import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import App from './App'
import sinon from 'sinon'
/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
**/

it('renders without crashing', () => {
  sinon.stub(BooksAPI, 'get').returns({then: function (cb) { cb({}) }})
  sinon.stub(BooksAPI, 'getAll').returns({then: function (cb) { cb([]) }})
  sinon.stub(BooksAPI, 'search').returns({then: function (cb) { cb([]) }})
  sinon.stub(BooksAPI, 'update').returns({then: function (cb) { cb({}) }})
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)
})
