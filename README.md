# MyReads Project

This project is part of my grade on Udacity's React Nanodegree. To see the original Udacity's starter template, please refer to [Udacity's starter template](https://github.com/udacity/reactnd-project-myreads-starter)

This project is a book shelf manager to control which books you are reading, want to read or already had read. You can manage you shelves on `http://localhost:3000/`.

## Moving a book to a shelf

To move a book, just click on the green circle in the book's cover and select a shelf to move that book.

## searching a book

To search and add books on your shelves, please use the `Add`/`+` button located on botton-right corner. Search using the book's name or author's name and then use the green circle in the same way described in the previous section.

## Install and run instructions

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Known issues

* there is an issue related with the time spent to load the query results. I used `Set`s to optimize the code, but seems I have some issue when I'm resolving the `promisse` to fill the result-grid.

## License

MIT License.
