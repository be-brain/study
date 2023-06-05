import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteToDo, updateTodo } from "../store";
import { Link } from "react-router-dom";

const Todo = ({ text, id }) => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState(text);

    const dispatch = useDispatch();
    const deleteHandler = () => {
        dispatch(deleteToDo(id));
    };
    const editHandler = () => {
        setIsActive(!isActive);
    };
    const onChange = (e) => {
        const inputText = e.target.value;
        setInputValue(inputText);
    };

    const updateBtn = () => {
        dispatch(updateTodo(inputValue, id));
        setIsActive(false);
    };

    const cancelBtn = () => {
        setIsActive(false);
    };

    return (
        <li>
            <div style={isActive ? { display: "none" } : { display: "block" }}>
                <Link to={`/${id}`}>{inputValue}</Link>
                <button onClick={deleteHandler}>DEL</button>
                <button onClick={editHandler}>EDT</button>
            </div>
            <div style={isActive ? { display: "block" } : { display: "none" }}>
                <input defaultValue={inputValue} onChange={onChange} />
                <button onClick={updateBtn}>OK</button>
                <button onClick={cancelBtn}>Cancel</button>
            </div>
        </li>
    );
};

export default Todo;
