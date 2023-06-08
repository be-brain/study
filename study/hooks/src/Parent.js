import { useState } from "react";
import Children from "./components/Children";

function Parent() {
    console.log("부모컴포넌트가 렌더링되었습니다");

    const [parentAge, setParentAge] = useState(10);
    const [childrenAge, setChildrenAge] = useState(1);

    const parentAgeHandler = () => {
        setParentAge(parentAge + 10);
    };

    const childrenAgeHandler = () => {
        setChildrenAge(childrenAge + 1);
    };

    const name = "별별";

    return (
        <div>
            <h1>나는 부모</h1>
            <p>{parentAge}살입니다.</p>
            <button onClick={parentAgeHandler}>부모나이올리기</button>
            <button onClick={childrenAgeHandler}>자식나이올리기</button>
            <Children name={name} childrenAge={childrenAge} />
        </div>
    );
}

export default Parent;
