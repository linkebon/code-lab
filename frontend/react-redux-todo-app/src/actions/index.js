import * as actionType from './ActionType';

export const addTodo = (id, text) => ({
    type: actionType.ADD_TODO,
    todo: {
        id: id,
        text: text
    }
});

export const removeTodo = (id) => ({
    type: actionType.REMOVE_TODO,
    id: id
});