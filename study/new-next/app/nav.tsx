import Link from "next/link";
import React from "react";

const Nav = () => {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/movies">movies</Link>
        </nav>
    );
};

export default Nav;
