import React from 'react';
import TodoContainer from '../container/TodoContainer';
import AddTodo from '../container/AddTodo';

const App = () => {
    return (
        <div className="container" style={{}}>
            <div className="row">
                <div className="col-md-8">
                    <AddTodo/>
                </div>
            </div>
            <br/>
            <div className="container">
                <TodoContainer/>
            </div>
        </div>
    )
};
export default App;