import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.handleTextClick = this.handleTextClick.bind(this)
    }
    handleClick() {
        this.props.deleteTodo(this._reactInternals.key)
    }
    handleTextClick() {
        this.props.linethroughTodo(this._reactInternals.key)
    }
    render() {
        let className=""
        if(this.props.linethrough){
            className = "Todo-text-linethrough"
        }
        return (
            <div>
                <div className={className} onClick={this.handleTextClick}>{this.props.text}
                </div>
                <button>Edit Me</button>
                <button onClick={this.handleClick}>Delete Me</button>
            </div>
        );
    }
}

export default Todo;