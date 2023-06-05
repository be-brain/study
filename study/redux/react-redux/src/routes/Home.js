import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../store";
import Todo from "../components/Todo";

const Home = () => {
    const [text, setText] = useState("");

    // useSelector = 어떤 state값을 쓰고싶은지 결정
    const toDo = useSelector((state) => state);
    // useDispatch = state값을 변경
    const dispatch = useDispatch();

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addToDo(text));
        setText("");
    };

    return (
        <div>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} />
                <button>Add</button>
            </form>
            <Todo toDo={toDo} />
        </div>
    );
};

export default Home;
