import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeTodo} from '../actions';


class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{whiteSpace: 'pre-line', border: '1px solid black', marginTop: '1%', padding: '1% 1% 1% 1%'}}>
                <p>{this.props.text}</p>
                <button className="btn-default btn-danger" onClick={(e) => {
                    e.preventDefault();
                    this.props.dispatch(removeTodo(this.props.id))
                }}>
                    Done
                </button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(removeTodo, dispatch)
    }
}

export default connect(mapDispatchToProps)(Todo)
