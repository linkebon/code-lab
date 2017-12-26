import * as actionType from '../actions/ActionType';

const todoReducer = (state = [], action) => {
    let newState;
    switch (action.type) {
        case actionType.ADD_TODO:
            newState = [...state];
            newState.push(action.todo);
            return newState;
        case actionType.REMOVE_TODO:
            return state.filter((existingItem) => {
                return existingItem.id !== action.id;
            });
        case actionType.TOGGLE_TODO:
            newState = [...state];
            newState.find((existingItem) => {
               return existingItem.id === action.id;
            }).collapsed = action.collapsed;
            return newState;
        default:
            return state;
    }
};

export default todoReducer;