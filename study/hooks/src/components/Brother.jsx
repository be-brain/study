import { useAtom } from "jotai";
import React from "react";
import { priceAtom } from "../pages/Home";

const Brother = () => {
    // useAtom훅을 사용하여 필요한 값을 가져온다
    const [price, setPrice] = useAtom(priceAtom);

    return (
        <div>
            <h1>Brother</h1>
            <h3>{price}</h3>
            <button onClick={() => setPrice(price + 1)}>price up</button>
        </div>
    );
};

export default Brother;
