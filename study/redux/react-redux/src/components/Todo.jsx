import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { remove, update } from "../store";

const Todo = ({ text, id }) => {
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState(text);
    const dispatch = useDispatch();

    const deleteHandler = () => {
        dispatch(remove(id));
    };
    const editHandler = () => {
        setIsActive(!isActive);
    };
    const onChange = (e) => {
        const inputText = e.target.value;
        setInputValue(inputText);
    };

    const updateBtn = (e) => {
        e.preventDefault();
        dispatch(update({ inputValue, id }));
        setIsActive(false);
    };

    const cancelBtn = (e) => {
        e.preventDefault();
        setIsActive(false);
    };

    return (
        <li>
            <div style={isActive ? { display: "none" } : { display: "block" }}>
                <Link to={`/${id}`}>{text}</Link>
                <button onClick={deleteHandler}>DEL</button>
                <button onClick={editHandler}>EDT</button>
            </div>
            <form style={isActive ? { display: "block" } : { display: "none" }}>
                <input defaultValue={text} onChange={onChange} />
                <button onClick={updateBtn}>OK</button>
                <button onClick={cancelBtn}>Cancel</button>
            </form>
        </li>
    );
};

export default Todo;
