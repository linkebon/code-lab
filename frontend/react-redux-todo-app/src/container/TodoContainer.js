import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
    }

    isEven(number) {

        return (number % 2) !== 0;
    };

    render() {
        let todo;
        return (
            <div className="container">
                <div className="row">
                    {this.props.todos.map((todo, index) => {
                        if (this.isEven(index)) {
                            todo = <div className='col-md-5' key={index}>
                                <Todo id={todo.id} text={todo.text} />
                                <div className="col-md-2"/>
                            </div>
                        } else {
                            todo = <div className='col-md-5' key={index}><Todo id={todo.id} text={todo.text}/></div>
                        }
                        return todo;
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todoReducer
    };
}

export default connect(mapStateToProps)(TodoContainer);
