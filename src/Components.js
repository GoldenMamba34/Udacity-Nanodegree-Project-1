import React from "react";


export class SuperBookshelf extends React.Component {

  state = {
      bookPlacement: { currentlyReading: [this.props.currentlyReading], wantToRead: [this.props.wantToRead], read: [this.props.read] }
  }

  render() {
    return (
<div>

  <span key={this.props.currentlyReading.title}>{this.state.bookPlacement.currentlyReading}</span>
  <span key={this.props.wantToRead.title}>{this.state.bookPlacement.wantToRead}</span>
    <span key={this.props.read.title}>{this.state.bookPlacement.read}</span>

      </div>
    )
  }
}



export class Bookshelf extends React.Component {
  state = {
    books: this.props.books
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.state.books &&
              this.state.books.map(function(book) {
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
  this.setState({currentShelf: event.target.value}, () => {
      this.props.action(this.state.currentShelf)
  });

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
  constructor(props) {
    super(props)
    this.childHandler = this.childHandler.bind(this)
}
childHandler(dataFromChild) {
       // log our state before and after we updated it
       this.setState({
           whichShelf: dataFromChild
       })
   }

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
          <BookShelfChanger action={this.childHandler}/>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.author}</div>
      </div>
    );
  }
}

// WEBPACK FOOTER //
// src/Components.js
