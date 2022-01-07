import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm.js'
import Todo from './Todo.js';
import { v4 as uuidv4 } from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleAddTodo = this.handleAddTodo.bind(this)
        this.handleDeleteTodo = this.handleDeleteTodo.bind(this)
        this.handleLinethroughTodo = this.handleLinethroughTodo.bind(this)
        this.handleToEditTodo = this.handleToEditTodo.bind(this)
        this.handleEditTodo = this.handleEditTodo.bind(this)
        this.state = {
            todos: []
        }
    }
    handleAddTodo(todo) {
        let newTodo = { ...todo, key: uuidv4(), linethrough: false, toedit: false }
        let oldTodos = this.state.todos
        let newTodos = [...oldTodos, newTodo]
        this.setState({
            todos: newTodos
        })
    }
    handleDeleteTodo(todoKey) {
        // let index = this.state.todos.findIndex(element => element.key == todoKey)
        // let newTodos = [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)]
        // this.setState(st => ({
        //     todos: newTodos
        // }));
        this.setState(st => ({
                todos: this.state.todos.filter(element => element.key !== todoKey)
            }));

    }
    handleLinethroughTodo(todoKey) {
        let index = this.state.todos.findIndex(element => element.key == todoKey)
        let newTodo = {
            todo: this.state.todos[index].todo,
            key: this.state.todos[index].key,
            toedit: this.state.todos[index].toedit,
            linethrough: !this.state.todos[index].linethrough
        }
        let newTodos = [...this.state.todos.slice(0, index), newTodo, ...this.state.todos.slice(index + 1)]
        this.setState(st => ({
            todos: newTodos
        }));
    }
    handleToEditTodo(todoKey) {
        let index = this.state.todos.findIndex(element => element.key == todoKey)
        let newTodo = {
            todo: this.state.todos[index].todo,
            linethrough: this.state.todos[index].linethrough,
            key: this.state.todos[index].key,
            toedit: true
        }
        let newTodos = [...this.state.todos.slice(0, index), newTodo, ...this.state.todos.slice(index + 1)]
        this.setState(st => ({
            todos: newTodos
        }));
    }
    handleEditTodo(todoKey, editedTodo) {
        let index = this.state.todos.findIndex(element => element.key == todoKey)
        let newTodo = {
            todo: editedTodo,
            linethrough: this.state.todos[index].linethrough,
            key: this.state.todos[index].key,
            toedit: false
        }
        let newTodos = [...this.state.todos.slice(0, index), newTodo, ...this.state.todos.slice(index + 1)]
        this.setState(st => ({
            todos: newTodos
        }));
    }
    render() {
        let todos = this.state.todos.map(todoElement => <Todo
            linethrough={todoElement.linethrough}
            text={todoElement.todo}
            key={todoElement.key}
            toedit={todoElement.toedit}
            deleteTodo={this.handleDeleteTodo}
            linethroughTodo={this.handleLinethroughTodo}
            toeditTodo={this.handleToEditTodo}
            editTodo={this.handleEditTodo}
        />)
        return (
                <div className="container mt-5 p-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-start p-5 rounded-2" style={{ backgroundColor: "#ee6c4d" }}>
                        <h2>Todo List</h2>
                        <p className="mb-1"> A React Todo List App</p>
                        <hr className="mt-0 mb-5" style={{ width: "60%" }} />
                        {todos}
                        <NewTodoForm addTodo={this.handleAddTodo} />
                    </div></div></div>
        );
    }
}

export default TodoList;