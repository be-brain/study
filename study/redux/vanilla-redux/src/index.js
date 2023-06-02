const { createStore } = require("redux");

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// let count = 0;
// number.innerText = count;

// const updateText = () => {
//     number.innerText = count;
// };

// const handleAdd = () => {
//     count = count + 1;
//     updateText();
// };
// const handleMinus = () => {
//     count = count - 1;
//     updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countReducer = (count = 0, action) => {
    console.log(count, action);
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            break;
    }
    return count;
};
const countStore = createStore(countReducer);

const onChange = () => {
    number.innerText = countStore.getState();
};
countStore.subscribe(onChange);
// subscribe = state의 변화를 알수있게 해준다

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
