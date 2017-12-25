import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addTodo} from '../actions';

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let text;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            if (!text.value.trim()) {
                                return;
                            }
                            this.props.dispatch(addTodo(Date.now(), text.value));
                        }}>

                    <textarea id="todoText" rows="6" cols="70" style={{resize: 'none', width: '100%', height: '100%'}} ref={node => {
                        text = node;
                    }}>
                    </textarea>
                            <br/>
                            <button className="btn-default btn-primary" type="submit">
                                Add Todo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(addTodo, dispatch)
    }
}

export default connect(mapDispatchToProps)(AddTodo)