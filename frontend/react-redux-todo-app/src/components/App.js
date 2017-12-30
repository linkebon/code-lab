import React from 'react';
import TodoContainer from '../container/TodoContainer';
import TweetContainer from '../container/TweetsContainer';

const App = () => {
    return (
        <div className="container" style={{marginTop: '1%'}}>
            <div className="container">
                <h1>linkebons</h1>
                <TodoContainer/>
                <br/>
                <TweetContainer/>
            </div>
        </div>
    )
};
export default App;