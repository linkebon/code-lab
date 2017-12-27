import React from 'react';
import TodoContainer from '../container/TodoContainer';

const App = () => {
    return (
        <div className="container" style={{marginTop: '1%'}}>
            <div className="container">
                <h1 style={{paddingLeft: '15px'}}>linkebons Todo app</h1>
                <TodoContainer/>
            </div>
        </div>
    )
};
export default App;