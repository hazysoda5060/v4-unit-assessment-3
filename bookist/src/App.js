import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import { Component } from 'react';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
    this.filterBooks = this.filterBooks.bind(this)
  }

  addToShelf(title) {
    this.setState({shelf: [...this.state.shelf, title] })
  }

  clearShelf() {
    this.setState({shelf: []})
  }

  // filterBooks(input) {
  //   let filteredBooks = this.state.books.filter(function(item) {
  //     return this.state.books.includes(item)
  //   })

  //   this.setState({books: filteredBooks})
  // }

  filterBooks(input) {
    let books = this.state.books;
    let filteredBooks = [];

    for ( let i = 0; i < books.length; i++ ) {
      if ( books[i].hasOwnProperty(input) ) {
        filteredBooks.push(books[i]);
      }
    }

    this.setState({books: filteredBooks});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks}/>
        <div className='below-content'>
          <BookList books={this.state.books} addToShelfFn={this.addToShelf}/>
          <Shelf shelfArr={this.state.shelf} clearShelfFn={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;

