import { Component } from "react";


class Shelf extends Component {
    render() {
        return (
            <div className='shelf'>
                <h3>Your Shelf</h3>
                <button onClick={this.props.clearShelfFn}>clear shelf</button>
                {this.props.shelfArr.map(el =>
                    <p>{el}</p>
                )}
            </div>
        )
    }
}

export default Shelf