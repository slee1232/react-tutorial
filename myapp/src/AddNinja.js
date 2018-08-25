import React, { Component } from 'react'

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="type" id="name" onChange={this.handleChange} />
                    <label htmlFor="name">Name:</label>
                    <input type="type" id="age" onChange={this.handleChange} />
                    <label htmlFor="name">Name:</label>
                    <input type="type" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja