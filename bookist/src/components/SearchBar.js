import { Component } from "react";


class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    handleClick(input) {
        this.props.filterBooks(input)
    }

    handleClear() {
        this.setState({userInput: ''})
        this.props.reset()
    }

    render() {
        return (
            <div>
                <input value={this.state.userInput} onChange={(ev) => this.handleChange(ev.target.value)}></input>
                <button onClick={() => this.handleClick(this.state.userInput)}>search</button>
                <button onClick={this.handleClear}>clear search</button>
            </div>
        )
    }
}

export default SearchBar