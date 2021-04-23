import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: data,
      shelf: []
    }
    this.addToShelf = this.addToShelf.bind(this)
  }

  addToShelf(title){
    this.setState({shelf: [...this.state.shelf, title] })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookList books={this.state.books} addToShelfFn={this.addToShelf}/>
        <Shelf shelfArr={this.state.shelf}/>
      </div>
    );
  }
}

export default App;

