import React, { useCallback, useEffect, useRef, useState } from "react";
import { Item } from "../types/user";
import { getItems } from "../api/login";
import ItemList from "../components/ItemList";

const PageA = () => {
    const [items, setItems] = useState<Item[] | null>(null);
    const isUserItemsFetched = useRef(false);

    // TODO 4-2: getItems를 호출하여 userItem을 가져온 경우 상태 업데이트
    const fetchUserItems = useCallback(async () => {
        const resGetItems = await getItems();
        if (resGetItems) setItems(resGetItems);

        isUserItemsFetched.current = true;
    }, []);

    /**
     * useRef를 넣은 이유?? fetch할때 state가 바뀌기 때문에 re-render가 일어난다
     * useEffect가 렌더될때마다 fetch가 일어나는것을 방지하기 위해
     * react-query를 사용할때는 필요없음(라이브러리의 fetch, loading, success...자체기능사용하면 됨)
     */

    useEffect(() => {
        if (!isUserItemsFetched.current) fetchUserItems();
    }, []);

    return (
        <div>
            <h1>Page A</h1>
            <ItemList items={items} />
        </div>
    );
};

export default PageA;
