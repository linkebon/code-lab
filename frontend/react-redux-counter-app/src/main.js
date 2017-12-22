import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/App';
import reducers from './reducers'
import {loadState, saveState} from "./localStorage";

const initialState = loadState();
const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

store.subscribe(() => {
    saveState(store.getState());
});
render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('reactView')
);
