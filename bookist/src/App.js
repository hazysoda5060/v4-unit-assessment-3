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
    this.reset = this.reset.bind(this)
  }

  addToShelf(title) {
    this.setState({shelf: [...this.state.shelf, title] })
  }

  clearShelf() {
    this.setState({shelf: []})
  }

  // filterBooks(input) {
  //   let filteredBooks = this.state.books.filter(function() {
  //     return this.state.books.includes(input)
  //   })

  //   this.setState({books: filteredBooks})
  // }

  filterBooks(input) {
    let filteredBooks = [];

    for(let i = 0; i < this.state.books.length; i++) {
      if(this.state.books[i].title.toLowerCase().includes(input) || this.state.books[i].author.toLowerCase().includes(input)) {
        filteredBooks.push(this.state.books[i]);
      }
    }
    this.setState({books: filteredBooks});
  }

  reset() {
    this.setState({books: data})
  }

  render() {
    // console.log(this.state.books[0].title)
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks} reset={this.reset}/>
        <div className='below-content'>
          <BookList books={this.state.books} addToShelfFn={this.addToShelf}/>
          <Shelf shelfArr={this.state.shelf} clearShelfFn={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;

