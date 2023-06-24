import { atom } from "jotai";
import { Link } from "react-router-dom";

// atom : 기본설정
export const priceAtom = atom(10);

const Home = () => {
    const readOnlyAtom = atom((get) => get(priceAtom) * 2);
    const writeOnlyAtom = atom(
        null, // 첫 번째 인수에 `null`을 전달하는 것이 관례입니다.
        (get, set, update) => {
            // `update`는 이 아톰을 업데이트하기 위해 받는 단일 값입니다.
            set(priceAtom, get(priceAtom) - update.discount);
        }
    );
    const readWriteAtom = atom(
        (get) => get(priceAtom) * 2,
        (get, set, newPrice) => {
            set(priceAtom, newPrice / 2);
            // 동시에 원하는 만큼 원자를 설정할 수 있습니다.
        }
    );

    return (
        <div>
            <h1>Home</h1>
            <Link to={"/brother"}>Brother</Link>
            <Link to={"/sister"}>Sister</Link>
        </div>
    );
};

export default Home;
