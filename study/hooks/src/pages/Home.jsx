import { atom } from "jotai";

// atom : 기본설정
export const themeAtom = atom("active");
export const colorAtom = atom((get) =>
    get(themeAtom) === "active" ? "blue" : "gray"
);

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;
