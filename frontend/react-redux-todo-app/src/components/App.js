import React from 'react';
import TodoContainer from '../container/TodoContainer';
import AddTodo from '../container/AddTodo';

const App = () => {
    return (
        <div className="container" style={{marginTop: '1%'}}>
            <div className="container">
                <h1 style={{paddingLeft: '15px'}}>Todo app</h1>
                <AddTodo/>
                <TodoContainer/>
            </div>
        </div>
    )
};
export default App;