import { Component } from "react";


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput = ''
        }
    }
    render() {
        return (
            <div>
                <input></input>
                <button>search</button>
                <button>clear search</button>
            </div>
        )
    }
}

export default SearchBar