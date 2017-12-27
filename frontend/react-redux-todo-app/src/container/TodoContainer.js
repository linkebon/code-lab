import React, {Component} from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class TodoContainer extends Component {
    constructor(props) {
        super(props);
    }

    isEven(number) {

        return (number % 2) !== 0;
    };

    renderTodoInitially(index) {
        return index === 0 || index === 1;
    }

    render() {
        let {dispatch} = this.props;
        let actions = bindActionCreators(TodoActions, dispatch);
        let todo;
        return (
            <div className="container">
                <div className="row">
                    {this.props.todos.map((todo, index) => {
                        if (this.isEven(index)) {
                            todo = <div className='col-md-5' key={index}>
                                <Todo id={todo.id} text={todo.text} collapsed={todo.collapsed} {...actions}
                                      forceRender={this.renderTodoInitially(index)}/>
                                <div className="col-md-2"/>
                            </div>
                        } else {
                            todo = <div className='col-md-5' key={index}>
                                <Todo id={todo.id} text={todo.text} collapsed={todo.collapsed} {...actions}
                                      forceRender={this.renderTodoInitially(index)}/>
                            </div>
                        }
                        return todo;
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todoReducer
    }
};

export default connect(mapStateToProps)(TodoContainer);
