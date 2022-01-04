import React, { Component } from 'react'
// import './TodoList.css';
import NewTodoForm from './NewTodoForm.js'
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.state = {
            todos: []
        }
    }
    handleAddTodo(todo) {
        let newTodo = { ...todo, key: uuidv4() }
        let oldTodos = this.state.todos
        let newTodos = [...oldTodos, newTodo]
        this.setState({
            todos: newTodos
        })
    }
    render() {
        return (
            <div>
                <NewTodoForm addTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoList;