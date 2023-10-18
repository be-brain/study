import { Item, User } from "../types/user";
import { BASE_URL } from "./const";

type LoginResult = "success" | "fail";

export interface LoginRequest {
    username: string;
    password: string;
}

export const login = async (args: LoginRequest): Promise<LoginResult> => {
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
        body: JSON.stringify(args),
    });

    return loginRes.ok ? "success" : "fail";
};

export const getCurrentUserInfo = async (): Promise<User | null> => {
    const userInfoRes = await fetch(`${BASE_URL}/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
    });

    return userInfoRes.ok ? userInfoRes.json() : null;
};

// TODO 4-2: GET, '/items' 호출
export const getItems = async (): Promise<Item[] | null> => {
    const getItemsRes = await fetch(`${BASE_URL}/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
    });
    return getItemsRes.json();
};

// TODO 4-2: GET, '/all-items' 호출
export const getAllItems = async (): Promise<Item[] | null> => {
    const getAllItemsRes = await fetch(`${BASE_URL}/all-items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
    });
    return getAllItemsRes.json();
};

// TODO 4-2: POST, '/logout' 호출
export const logout = async (): Promise<void> => {
    const logoutRes = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
    });

    return logoutRes.json();
    // .json()붙인것과 안붙인것 무슨차이?
    /*
    json()인터페이스의 메서드는 스트림을 Response가져와 Response완료될 때까지 읽습니다. 본문 텍스트를 구문 분석한 결과로 해결되는 Promise를 반환합니다.
    fetch로는 데이터를 바로 사용할 수 없다. fetch를 사용할 땐 두 단계를 거쳐야 한다.
    먼저 올바른 url로 요청을 보내야 하고, 바로 뒤에오는 응답에 대해 json()을 해줘야 하는 것이다(axios는 json()과정을 자동으로 해주는 셈이다).
    */
};
