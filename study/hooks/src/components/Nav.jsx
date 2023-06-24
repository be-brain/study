import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <Link to={"/home"}>Home</Link>
            <Link to={"/brother"}>Brother</Link>
            <Link to={"/sister"}>Sister</Link>
        </nav>
    );
};

export default Nav;
