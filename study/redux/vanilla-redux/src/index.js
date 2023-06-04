import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const UPDATE_TODO = "UPDATE_TODO";

const toDoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [{ text: action.text, id: Date.now() }, ...state];
        case REMOVE_TODO:
            return state.filter((item) => item.id !== action.id);
        case UPDATE_TODO:
            const newState = Object.assign(state);
            newState
                .filter((item) => item.id === action.id)
                .map((item) => {
                    item.text = action.text;
                    return item;
                });
            return newState;
        default:
            return state;
    }
};

const toDoStore = createStore(toDoReducer);

const createTodo = () => {
    const toDos = toDoStore.getState();
    ul.innerHTML = "";
    toDos.forEach((element) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        const editBtn = document.createElement("button");
        btn.innerHTML = "DEL";
        btn.addEventListener("click", deleteTodo);
        editBtn.innerHTML = "EDT";
        editBtn.addEventListener("click", editTodo);
        li.id = element.id;
        li.innerText = element.text;
        ul.appendChild(li);
        li.appendChild(btn);
        li.appendChild(editBtn);
    });
};

toDoStore.subscribe(createTodo);

const deleteTodo = (e) => {
    const id = parseInt(e.target.parentNode.id);
    return toDoStore.dispatch({ type: REMOVE_TODO, id });
};
/* 
    수정버튼누르면 input폼과 수정완료/취소버튼
    default값이 들어있는 input폼 띄우기

    1. 수정완료일때
    : input값으로 기존li를 바꿔준다
    2. 취소일때
    : 그냥 창을 닫는다
*/
const editTodo = (e) => {
    const todoItem = e.target.parentNode;
    const todoItemText = todoItem.firstChild;
    const inputText = todoItemText.textContent;

    const divElem = document.createElement("div");
    const inputElem = document.createElement("input");
    inputElem.value = inputText;

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "OK";
    completeBtn.addEventListener("click", updateTodo);

    const cancelBtn = document.createElement("button");
    cancelBtn.innerHTML = "CANCEL";
    cancelBtn.addEventListener("click", cancel);

    todoItem.appendChild(divElem);
    divElem.appendChild(inputElem);
    divElem.appendChild(completeBtn);
    divElem.appendChild(cancelBtn);
};

const cancel = (e) => {
    const ele = e.target.parentNode;
    ele.style.display = "none";
};

const updateTodo = (e) => {
    const editBox = e.target.parentNode;
    const updateInput = editBox.firstChild;

    const id = parseInt(editBox.parentNode.id);
    const text = updateInput.value;

    return toDoStore.dispatch({ type: UPDATE_TODO, id, text });
};

const onSubmit = (e) => {
    e.preventDefault();
    const toDo = input.value;
    toDoStore.dispatch({ type: ADD_TODO, text: toDo });
    input.value = "";
};

form.addEventListener("submit", onSubmit);
