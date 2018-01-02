import React, {Component} from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {addTodo} = this.props;
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
                            addTodo(Date.now(), text.value);
                        }}>

                    <textarea id="todoText" className="todoTextArea" rows="6" cols="70" ref={node => {
                                  text = node;
                              }}>
                    </textarea>
                            <br/>
                            <button className="btn-primary" type="submit">
                                Add Todo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTodo