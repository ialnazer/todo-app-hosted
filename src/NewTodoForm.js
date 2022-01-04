import React, { Component } from 'react'

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
    handleSubmit(evt){
        evt.preventDefault();
        this.setState({
            todo: ""
        })
        this.props.addTodo(this.state)
    }
    render() {
        return (
            <form>
                <input name='todo' value={this.state.todo} onChange={this.handleChange}></input>
                <input type="submit" onClick={this.handleSubmit}/>
            </form>
        );
    }
}

export default NewTodoForm;