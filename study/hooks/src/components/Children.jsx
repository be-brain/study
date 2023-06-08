import React, { memo } from "react";

const Children = ({ name, childrenAge }) => {
    console.log("자식컴포넌트가 렌더링되었습니다");

    return (
        <div>
            <h1>나는 자식</h1>
            <p>{childrenAge}살입니다.</p>
            <p>
                이름 : {name.first}
                {name.last}
            </p>
        </div>
    );
};

// export default memo(Children);
export default React.memo(Children);
