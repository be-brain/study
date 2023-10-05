import React, { useState } from "react";
import getFormValues from "../functions/getFormValues";

type LoginSuccessMessage = "SUCCESS";
type LoginFailMessage = "FAIL";

interface LoginResponse {
    message: LoginSuccessMessage | LoginFailMessage;
    token: string;
}

interface User {
    name: string;
    pw: string;
    info: string;
}

const users: User[] = [
    {
        name: "cha1",
        pw: "a1234",
        info: "1입니다",
    },
    {
        name: "cha2",
        pw: "b1234",
        info: "2입니다",
    },
    {
        name: "cha3",
        pw: "c1234",
        info: "3입니다",
    },
];
const token = "success!@#$";

const login = async (
    username: FormDataEntryValue,
    password: FormDataEntryValue
): Promise<LoginResponse | null> => {
    // TODO: 올바른 username, password를 입력하면 {message: 'SUCCESS', token: (원하는 문자열)} 를 반환하세요.
    const isMember = users.find(
        (item) => item.name === username && item.pw === password
    );
    return isMember ? { message: "SUCCESS", token } : null;
};

const getUserInfo = async (userInfo: any): Promise<{ info: string } | null> => {
    // TODO: login 함수에서 받은 token을 이용해 사용자 정보를 받아오세요.

    return null;
};

const LoginWithMockAPI = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    const [isMember, setIsMember] = useState(false);
    const loginSubmitHandler = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();
        // TODO: form 에서 username과 password를 받아 login 함수를 호출하세요.
        const { isEmpty, data } = getFormValues(event.currentTarget);
        isEmpty ? setIsEmpty(true) : setIsEmpty(false);
        getUserInfo(login(data.username, data.password));
        // for (let [key, value] of formData.entries()) console.log(key, value);
        event.currentTarget.reset();
    };

    return (
        <div>
            <h1>Login with Mock API</h1>
            <form onSubmit={loginSubmitHandler}>
                {/* TODO: 여기에 username과 password를 입력하는 input을 추가하세요. 제출을 위해 button도 추가하세요. */}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                {/* input에 반드시 name이 있어야 한다 */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button style={{ border: "none" }}>Submit</button>
            </form>
            <div>
                {isEmpty && (
                    <h5 style={{ color: "red" }}>입력이 되지 않았습니다!</h5>
                )}
                <h2>User info</h2>
                {/* TODO: 유저 정보를 보여주도록 구현하세요. 필요에 따라 state나 다른 변수를 추가하세요. */}
                {/* <p>{JSON.stringify({ username: "blue" })}</p> */}
            </div>
        </div>
    );
};

export default LoginWithMockAPI;
