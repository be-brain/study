import { createStore } from "redux";

/**
 * MutateState 쓰지마라
 * */

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const toDoReducer = (state = [], action) => {
    console.log(state, action);
    switch (action.type) {
        case ADD_TODO:
            return [];
        case REMOVE_TODO:
            return [];
        default:
            return state;
    }
};

const toDoStore = createStore(toDoReducer);

// const createTodo = (toDo) => {
//     const li = document.createElement("li");
//     li.innerText = toDo;
//     ul.appendChild(li);
// };

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    toDoStore.dispatch({ type: ADD_TODO, text: toDo });
    input.value = "";
};

form.addEventListener("submit", onSubmit);
