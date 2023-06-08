import { useCallback, useMemo, useState } from "react";
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

    // 객체는 변수에 값이 아닌 값이 담긴 주소참조값이 저장된다
    const name = useMemo(() => {
        return { first: "성", last: "이름" };
    }, []);
    // 함수도 객체
    const renderCheck = useCallback(() => {
        console.log("렌더링확인!!");
    }, []);

    return (
        <div>
            <h1>나는 부모</h1>
            <p>{parentAge}살입니다.</p>
            <button onClick={parentAgeHandler}>부모나이올리기</button>
            <button onClick={childrenAgeHandler}>자식나이올리기</button>
            <Children
                name={name}
                childrenAge={childrenAge}
                renderCheck={renderCheck}
            />
        </div>
    );
}

export default Parent;
