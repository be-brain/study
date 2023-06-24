import { useAtom } from "jotai";
import React from "react";
import { priceAtom } from "../pages/Home";

const Sister = () => {
    const [price] = useAtom(priceAtom);
    return (
        <div>
            <h1>Sister</h1>
            <h3>{price}</h3>
        </div>
    );
};

export default Sister;
