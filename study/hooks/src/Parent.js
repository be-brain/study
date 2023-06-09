import { useRef } from "react";
import Children from "./components/Children";

function Parent() {
    const ref = useRef();
    const focus = () => {
        ref.current.focus();
    };

    return (
        <div>
            <Children ref={ref} />
            <button onClick={focus}>focus</button>
        </div>
    );
}

export default Parent;
