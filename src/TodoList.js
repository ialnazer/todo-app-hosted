import React, { Component } from 'react'
// import './TodoList.css';
import NewTodoForm from './NewTodoForm.js'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo.js';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this) 
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
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
    handleDeleteTodo(todoKey) {
        let index = this.state.todos.findIndex(element => element.key == todoKey)
        let newTodos = [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)]
        this.setState(st => ({
            todos: newTodos
        }));
    }
    render() {
        let todos = this.state.todos.map(todoElement => <Todo text={todoElement.todo} key={todoElement.key} deleteTodo={this.handleDeleteTodo}/>)
        return (
            <div>
                <NewTodoForm addTodo={this.handleAddTodo} />
                {todos}
            </div>
        );
    }
}

export default TodoList;