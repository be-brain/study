import { User } from "../types/user";
import { BASE_URL } from "./const";

type LoginResult = "success" | "fail";

export interface LoginRequest {
    username: string;
    password: string;
}

/* options 예시:
const option: RequestInit = {
  method: 'POST',
  body: JSON.stringify({ username, password })
} */

const fetchClient = async (url: string, options: RequestInit) => {
    // CORS는 기본적으로 보안상의 이유로 쿠키를 요청으로 보낼 수 없도록 막고 있다.
    // 하지만 다른 도메인을 가진 API 서버에 자신을 인증해야 정상적인 응답을 받을 수 있는 상황에서는 쿠키를 통한 인증이 필요.
    // 이를 위해서 두 가지 작업이 필요
    // 1. 요청을 credentials 모드로 설정하기
    // 2. 서버에서 응답 헤더로 Access-Control-Allow-Credentials: true 설정하기
    return fetch(url, {
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
        },
        ...options,
    });
};

export const login = async (args: LoginRequest): Promise<LoginResult> => {
    // TODO 3-1: POST, '/auth/login' 호출
    // body에는 { username, password }가 들어가야 함
    // fetchClient를 사용하여 API 호출하거나, 직접 headers 작성
    // header가 올바르게 추가된 경우 쿠키는 자동으로 함께 전송됨
    const response = await fetchClient(`${BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify(args),
    });

    return response.ok ? "success" : "fail";
};

export const getCurrentUserInfo = async (): Promise<User | null> => {
    // TODO 3-2: GET, '/profile' 호출
    // 호출 성공시 유저 정보 반환
    // fetchClient를 사용하여 API 호출하거나, 직접 headers 작성
    // header가 올바르게 추가된 경우 쿠키는 자동으로 함께 전송됨

    return null;
};
