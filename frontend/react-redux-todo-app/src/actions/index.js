import * as actionType from './ActionType';

export const addTodo = (id, text) => ({
    type: actionType.ADD_TODO,
    todo: {
        id: id,
        text: text,
        collapsed: true
    }
});

export const removeTodo = (id) => ({
    type: actionType.REMOVE_TODO,
    id: id
});

export const toggleTodo = (id, collapsed) => ({
    type: actionType.TOGGLE_TODO,
    id: id,
    collapsed: collapsed
});
