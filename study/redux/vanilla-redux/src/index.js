import { createStore } from "redux";

/**
 * mutate state 쓰지마라(redux방식 아님)
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
            return [{ text: action.text, date: Date.now() }, ...state];
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

const createTodo = () => {
    const toDos = toDoStore.getState();
    ul.innerHTML = "";
    toDos.forEach((element) => {
        const li = document.createElement("li");
        li.date = element.date;
        li.innerText = element.text;
        ul.appendChild(li);
    });
};

toDoStore.subscribe(createTodo);

// const onSubmit = (e) => {
//     e.preventDefault();
//     const toDo = input.value;
//     createTodo(toDo);
//     input.value = "";
// };

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    toDoStore.dispatch({ type: ADD_TODO, text: toDo });
    input.value = "";
};

form.addEventListener("submit", onSubmit);
