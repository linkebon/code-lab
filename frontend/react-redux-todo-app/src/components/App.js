import React from 'react';
import TodoContainer from '../container/TodoContainer';
import AddTodo from '../container/AddTodo';

const App = () => {
    return (
        <div>
            <AddTodo/>
            <br />
            <TodoContainer/>
        </div>
    )
};
export default App;