import React from "react";

const Todo = ({ toDo }) => {
    return (
        <ul>
            {toDo.map((item) => (
                <li key={item.id}>
                    {item.text}
                    <button>DEL</button>
                    <button>EDT</button>
                </li>
            ))}
        </ul>
    );
};

export default Todo;
