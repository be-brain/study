import { forwardRef } from "react";

// 첫번째방법
// const Children = forwardRef((_, ref) => {
//     return (
//         <>
//             <input ref={ref} />
//         </>
//     );
// });

// export default Children;

// 두번째방법
const Children = (props, ref) => {
    return (
        <>
            <input ref={ref} />
        </>
    );
};

export default forwardRef(Children);
