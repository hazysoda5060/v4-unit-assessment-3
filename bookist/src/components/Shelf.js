import { Component } from "react";


class Shelf extends Component {
    render() {
        return (
            <div>
                <h3>shelf</h3>
                {this.props.shelfArr.map(el =>
                    <p>{el}</p>
                )}
            </div>
        )
    }
}

export default Shelf