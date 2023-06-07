import { useReducer, useState } from "react";

const ACTION_TYPES = {
    deposit: "deposit",
    withdraw: "withdraw",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.deposit:
            return state + action.payload;
        case ACTION_TYPES.withdraw:
            return state - action.payload;
        default:
            return state;
    }
};

function App() {
    const [number, setNumber] = useState(0);
    const initialState = 0;
    const [money, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        setNumber(parseInt(e.target.value));
    };
    const deposit = () => {
        dispatch({ type: ACTION_TYPES.deposit, payload: number });
        setNumber(0);
    };
    const withdraw = () => {
        dispatch({ type: ACTION_TYPES.withdraw, payload: number });
        setNumber(0);
    };

    return (
        <div>
            <h1>별별은행</h1>
            <h3>잔고 : {money}원</h3>
            <input
                type="number"
                step={1000}
                min={0}
                value={number}
                onChange={onChange}
            />
            <button onClick={deposit}>입금</button>
            <button onClick={withdraw}>출금</button>
        </div>
    );
}

export default App;
