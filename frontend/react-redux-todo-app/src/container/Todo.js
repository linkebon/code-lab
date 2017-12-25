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
                <a style={{marginLeft: '96%'}} data-toggle="collapse" href={'#' + this.props.id} aria-expanded="false" aria-controls={'#' + this.props.id}>/\</a>
                <div id={this.props.id} className={`collapse ${this.props.renderInitially ? 'in' : ''}`}
                     area-expanded={`${this.props.renderInitially ? 'true' : 'false'}`}>
                    <p>{this.props.text}</p>
                    <button className="btn-default btn-danger" onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch(removeTodo(this.props.id))
                    }}>
                        Done
                    </button>
                </div>
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
