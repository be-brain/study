import { useAtom } from "jotai";
import React from "react";
import { colorAtom, themeAtom } from "../pages/Home";

const Brother = () => {
    // useAtom훅을 사용하여 필요한 값을 가져온다
    const [theme, setTheme] = useAtom(themeAtom);
    const [color] = useAtom(colorAtom);
    const toggle = () => {
        theme === "active" ? setTheme("inactive") : setTheme("active");
    };

    return (
        <div>
            <h1 style={{ color: `${color}` }}>Brother</h1>
            <h3>{theme}</h3>
            <button onClick={toggle}>toggle</button>
        </div>
    );
};

export default Brother;
