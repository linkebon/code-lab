import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                {this.props.todos.map((todo, index) => {
                    return (
                        <Todo id={todo.id} text={todo.text} key={index}/>
                    );
                })}
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todoReducer
    };
}

export default connect(mapStateToProps)(TodoContainer);
