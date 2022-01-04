import React, { Component } from 'react'
import './Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.handleTextClick = this.handleTextClick.bind(this)
        this.handleEditClick = this.handleEditClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            editedTodo: this.props.text
        }
    }
    handleDeleteClick() {
        this.props.deleteTodo(this._reactInternals.key)
    }
    handleEditClick() {
        this.props.toeditTodo(this._reactInternals.key)
    }
    handleTextClick() {
        this.props.linethroughTodo(this._reactInternals.key)
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.editTodo(this._reactInternals.key, this.state.editedTodo)
    }
    render() {
        let className = ""
        if (this.props.linethrough) {
            className = "Todo-text-linethrough"
        }
        let todo =
            <div>
                <div className={className} onClick={this.handleTextClick}>{this.props.text}</div>
                <button onClick={this.handleEditClick}>Edit Me</button>
                <button onClick={this.handleDeleteClick}>Delete Me</button>
            </div>
        if (this.props.toedit) {
            todo =
                <form>
                    <input name='editedTodo' value={this.state.editedTodo} onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Save</button>
                </form>
        }
        return (
            <div>
                {todo}
            </div>
        );
    }
}

export default Todo;