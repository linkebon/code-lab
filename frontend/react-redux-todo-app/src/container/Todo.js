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
            <div style={{ whiteSpace: 'pre-line', border: '1px solid black', marginLeft: '1%', marginTop: '1%', paddingBottom: '1%', paddingTop: '1%'}} className="col-md-5">
                <p>{this.props.text}</p>
                <button className="btn-default btn-danger" onClick={(e) => {
                    e.preventDefault();
                    this.props.dispatch(removeTodo(this.props.id))
                }}>
                    Remove
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
