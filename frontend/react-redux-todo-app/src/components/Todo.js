import React, {Component} from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    isCollapsed(status, forceRender) {
        return status === true && forceRender === false;
    }

    render() {
        let collapsed = this.isCollapsed(this.props.collapsed, this.props.forceRender);
        const {toggleTodo, removeTodo} = this.props;
        return (
            <div style={{whiteSpace: 'pre-line', border: '1px solid black', marginTop: '1%', padding: '1% 1% 1% 1%'}}>
                <div className="pull-right">
                    <a className={`text-muted`} data-toggle="collapse" href={'#' + this.props.id}
                       aria-expanded="false"
                       aria-controls={'#' + this.props.id}
                       onClick={(e) => {
                           e.preventDefault();
                           toggleTodo(this.props.id, !this.props.collapsed);
                       }}>
                        {new Date(this.props.id).toLocaleString()}</a>
                    <button className="btn-danger" style={{marginLeft: '10px'}} onClick={(e) => {
                        e.preventDefault();
                        removeTodo(this.props.id);
                    }}>x
                    </button>
                </div>
                <br/>
                <div id={this.props.id} className={`collapse ${collapsed ? '' : 'in'}`} aria-expanded={`${collapsed ? 'false' : 'true'}`}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Todo;
