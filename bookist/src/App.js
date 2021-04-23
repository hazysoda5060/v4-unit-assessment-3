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
  }

  addToShelf(title) {
    this.setState({shelf: [...this.state.shelf, title] })
  }

  clearShelf() {
    this.setState({shelf: []})
  }

  filterBooks(input) {
    this.setState({books: this.state.books.filter(input)})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar filterBooks={this.filterBooks}/>
        <button onClick={this.clearShelf}>test me</button>
        <div className='below-content'>
          <BookList books={this.state.books} addToShelfFn={this.addToShelf}/>
          <Shelf shelfArr={this.state.shelf} clearShelfFn={this.clearShelf}/>
        </div>
      </div>
    );
  }
}

export default App;

