import React, { useState } from "react";

const Home = () => {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setText("");
    };

    return (
        <div>
            <h1>To do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={text} />
                <button>Add</button>
            </form>
            <ul></ul>
        </div>
    );
};

export default Home;
