import { useReducer, useState } from "react";

const ACTION_TYPES = {
    add: "add",
    remove: "remove",
    cancel: "cancel",
};

const initialState = { count: 0, userInfo: [] };

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.add:
            const newState = {
                id: Date.now(),
                name: action.payload.name,
                isCancel: false,
            };
            return {
                count: state.count++,
                userInfo: [newState, ...state.userInfo],
            };
        case ACTION_TYPES.remove:
            return {
                count: state.count--,
                userInfo: state.userInfo.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case ACTION_TYPES.cancel:
            return {
                count: state.count,
                userInfo: state.userInfo.map((item) => {
                    if (item.id === action.payload.id)
                        return { ...item, isCancel: !item.isCancel };
                    return item;
                }),
            };
        default:
            return state;
    }
};

function App() {
    const [name, setName] = useState("");
    const [info, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        const inputText = e.target.value;
        setName(inputText);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ACTION_TYPES.add,
            payload: { name },
        });
        setName("");
    };

    const remove = (targetId) => {
        const id = parseInt(targetId);
        dispatch({
            type: ACTION_TYPES.remove,
            payload: { id },
        });
    };

    const toggle = (targetId) => {
        const id = parseInt(targetId);
        dispatch({
            type: ACTION_TYPES.cancel,
            payload: { id },
        });
    };

    return (
        <div>
            <h1>별별명단</h1>
            <h4>총 인원 : {info.count}명</h4>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={name} />
                <button type="submit">등록</button>
            </form>
            <ul>
                {info.userInfo.map((item) => (
                    <li key={item.id}>
                        <span
                            onClick={() => toggle(item.id)}
                            style={{
                                textDecoration: item.isCancel
                                    ? "line-through"
                                    : "none",
                                cursor: "pointer",
                            }}
                        >
                            {item.name}
                        </span>
                        <button onClick={() => remove(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
