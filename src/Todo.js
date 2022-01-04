import React, { Component } from 'react'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.props.deleteTodo(this._reactInternals.key)
    }
    render() {
        return (
            <div>
                <div>{this.props.text}
                </div>
                <button>Edit Me</button>
                <button onClick={this.handleClick}>Delete Me</button>
            </div>
        );
    }
}

export default Todo;