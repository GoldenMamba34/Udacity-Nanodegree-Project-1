import React from "react";


export class SuperBookshelf extends React.Component {
  state = {
      bookPlacement: { currentlyReading: [], wantToRead: [], read: [] }
  }
  render() {
    return (
<div>
      {this.props.bookshelves &&
        this.props.bookshelves.map(function(bookshelf) {
          return <span key={bookshelf.title}>{bookshelf}</span>;
        })}
      </div>
    )
  }
}



export class Bookshelf extends React.Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books &&
              this.props.books.map(function(book) {
                return <li key={book.title}>{book}</li>;
              })}
          </ol>
        </div>
      </div>
    );
  }
}

class BookShelfChanger extends React.Component {
  constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
  state = {
    currentShelf: ""
  };
  handleChange(event) {
  this.setState({currentShelf: event.target.value});
}

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export class Book extends React.Component {
  state = {
    whichShelf: ""
  };

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.bookCoverURL})`
            }}
          />
          <BookShelfChanger/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

// WEBPACK FOOTER //
// src/Components.js
