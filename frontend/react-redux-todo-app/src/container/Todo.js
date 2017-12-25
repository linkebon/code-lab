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
                <div className="pull-right">
                    <a className={`text-muted`} data-toggle="collapse" href={'#' + this.props.id}
                       aria-expanded="false"
                       aria-controls={'#' + this.props.id}>{new Date(this.props.id).toLocaleString()}</a>
                    <button className="btn-danger" style={{marginLeft: '10px'}} onClick={(e) => {
                        e.preventDefault();
                        this.props.dispatch(removeTodo(this.props.id))
                    }}>x
                    </button>
                </div>
                <br/>
                <div id={this.props.id} className={`collapse ${this.props.renderInitially ? 'in' : ''}`}
                     area-expanded={`${this.props.renderInitially ? 'true' : 'false'}`}>
                    <p>{this.props.text}</p>
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
