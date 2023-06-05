import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detail = () => {
    const id = parseInt(useParams().id);
    const toDo = useSelector((state) => state);
    return <div>{toDo.find((item) => item.id === id)?.text}</div>;
};

export default Detail;
