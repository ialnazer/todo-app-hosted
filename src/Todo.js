import React, { Component } from 'react'

class Todo extends Component {
    render() {
        return (
            <div>
                <div>{this.props.text}
                </div>
                <button>Edit Me</button>
                <button>Delete Me</button>
            </div>
        );
    }
}

export default Todo;