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
        let className = "flex-grow-1"
        if (this.props.linethrough) {
            className = `${className} Todo-text-linethrough`
        }
        let todo =
            <div className="d-flex flex-row">
                <div className={className} onClick={this.handleTextClick}>{this.props.text}</div>
                <div>
                    <span className="me-2 rounded-2" onClick={this.handleEditClick}><i className="fas fa-pencil-alt p-1"></i></span>
                    <span className=" rounded-2" onClick={this.handleDeleteClick}><i className="fas fa-trash p-1"></i></span>
                </div>
            </div>
        if (this.props.toedit) {
            todo =
                <form className="Todo-form">
                <div className="row align-items-center">
                    <div className="col-8">
                    <input className="form-control" name='editedTodo' value={this.state.editedTodo} onChange={this.handleChange}></input>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                    <button className="btn Todo-form-btn" onClick={this.handleSubmit}>Save</button>
                    </div>
                </div>
                </form>
            // <form className="d-flex flex-row Todo-form">
            //     <input className="flex-grow-1" name='editedTodo' value={this.state.editedTodo} onChange={this.handleChange}></input>
            //     <button className="Todo-form-btn" onClick={this.handleSubmit}>Save</button>
            // </form>
        }
        return (
            <div className="Todo mb-2">
                {todo}
            </div>
        );
    }
}

export default Todo;