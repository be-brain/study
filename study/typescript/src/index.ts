import { init, exit } from "myPackage";

const hello = () => "Hello!";

class Block {
    constructor(private data: string) {}
    static hello() {
        return "HELLO";
    }
}

localStorage.setItem("name", "Bella");

init({ url: "http://www.google.com" });
exit(1);
