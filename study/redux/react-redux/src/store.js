import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";
const UPDATE = "UPDATE";

export const addToDo = (text) => {
    return {
        type: ADD,
        text,
    };
};

export const deleteToDo = (id) => {
    return {
        type: DELETE,
        id,
    };
};

export const updateTodo = (text, id) => {
    return {
        type: UPDATE,
        text,
        id,
    };
};

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter((item) => item.id !== action.id);
        case UPDATE:
            state
                .filter((item) => item.id === action.id)
                .map((item) => (item.text = action.text));
            return state;
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
