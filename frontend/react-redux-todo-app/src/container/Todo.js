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
            <div className="container">
                <div style={{border: '1px dotted black'}}>
                    <p>text: {this.props.text}</p>
                    <button className="button" onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch(removeTodo(this.props.id))
                    }}>
                        Remove
                    </button>
                </div>
                <br />
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
