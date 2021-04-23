import { Component } from "react";


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    handleClick(input) {
        this.props.filterBooks(input)
    }

    render() {
        console.log(this.state.userInput)
        return (
            <div>
                <input onChange={(ev) => this.handleChange(ev.target.value)}></input>
                <button onClick={() => this.handleClick(this.state.userInput)}>search</button>
                <button>clear search</button>
            </div>
        )
    }
}

export default SearchBar