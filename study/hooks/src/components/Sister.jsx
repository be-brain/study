import { useAtom } from "jotai";
import React from "react";
import { colorAtom, themeAtom } from "../pages/Home";

const Sister = () => {
    const [theme] = useAtom(themeAtom);
    const [color] = useAtom(colorAtom);
    return (
        <div>
            <h1 style={{ color: `${color}` }}>Sister</h1>
            <h3>{theme}</h3>
        </div>
    );
};

export default Sister;
