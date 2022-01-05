import React, { Component } from 'react'
import './NewTodoForm.css'

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            todo: ""
        }
    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({
            todo: ""
        })
        this.props.addTodo(this.state)
    }
    render() {
        return (
            <div className="mt-3 NewTodoForm">
                <p className="mb-1">My New Todo</p>
                <form>
                    <div className="row align-items-center">
                        <div className="col-8">
                            <input className="form-control" name='todo' value={this.state.todo} onChange={this.handleChange}></input>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                        <button className="btn NewTodoForm-btn" onClick={this.handleSubmit}>Add Todo</button>
                        </div>
                    </div>
                </form>
            </div>
            // <div className="mt-3 NewTodoForm">
            //     <p className="mb-2"> Add New Todo</p>
            //     <form className="d-flex flex-row mb-3">
            //         <input className="flex-grow-1 form-control" name='todo' value={this.state.todo} onChange={this.handleChange}></input>
            //         <button className="NewTodoForm-btn" onClick={this.handleSubmit}>Add Todo</button>
            //     </form>
            // </div>
        );
    }
}

export default NewTodoForm;