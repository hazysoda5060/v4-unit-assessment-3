import { Component } from "react";

class BookList extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <h3>list</h3>
            <div className='grid'>
                {this.props.books.map(el =>
                        <div>
                            <img className='book-img' src={el.img} alt={el.title} onClick={() => this.props.addToShelfFn(el.title)}></img>
                            <p className='discriptor'>{el.author}</p>
                            <p className='discriptor'>{el.title}</p>
                        </div>
                )}
            </div>
            </div>
        )
    }
}

export default BookList