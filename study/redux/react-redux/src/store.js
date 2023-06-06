import { configureStore, createSlice } from "@reduxjs/toolkit";

/* 
toolkit은
1. new state를 반환하거나
2. state를 mutate할수있다
*/
// const reducer = createReducer(0, {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) => {
//         state.filter((item) => item.id !== action.payload);
//     },
//     [updateToDo]: (state, action) => {
//         state
//             .filter((item) => item.id === action.payload.id)
//             .map((item) => (item.text = action.payload.inputValue));
//     },
// });
// export const actionCreators = { addToDo, deleteToDo, updateToDo };

/* 
    createSlice : reducer + action
*/
const toDos = createSlice({
    name: "toDoReducer",
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.unshift({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        update: (state, action) => {
            state
                .filter((item) => item.id === action.payload.id)
                .map((item) => (item.text = action.payload.inputValue));
        },
    },
});
export const { add, remove, update } = toDos.actions;

const store = configureStore({ reducer: toDos.reducer });
export default store;
