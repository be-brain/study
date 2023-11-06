// tsconfig.json에서 "allowJs": true로 설정함으로써 js파일을 불러올 수 있다
import { init, exit } from "./myPackage.js";

const hello = () => "Hello!";

class Block {
    constructor(private data: string) {}
    static hello() {
        return "HELLO";
    }
}

localStorage.setItem("name", "Bella");

init({ debug: true, url: "http://www.google.com" });
exit(1);
