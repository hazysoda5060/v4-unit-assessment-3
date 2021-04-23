import { Component } from "react";

class BookList extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
            <h3>list</h3>
            <div>
                {this.props.books.map(el =>
                        <div>
                            <img src={el.img} alt={el.title} onClick={() => this.props.addToShelfFn(el.title)}></img>
                            <p>{el.author}</p>
                            <p>{el.title}</p>
                        </div>
                )}
            </div>
            </div>
        )
    }
}

export default BookList