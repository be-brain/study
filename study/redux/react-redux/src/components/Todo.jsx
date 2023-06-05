import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

const Todo = ({ text, id }) => {
    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteToDo(id));
    };

    return (
        <li>
            {text}
            <button onClick={deleteHandler}>DEL</button>
            <button>EDT</button>
        </li>
    );
};

export default Todo;
