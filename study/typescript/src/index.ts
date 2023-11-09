// import * as crypto from "crypto"; // * : everything
import crypto from "crypto"; // tsconfig → esModuleInterop : true로 설정

interface BlockShape {
    hash: string;
    prevHash: string;
    height: number; //블록위치표시
    data: string;
}
class Block implements BlockShape {
    public hash: string;
    constructor(
        public prevHash: string,
        public height: number,
        public data: string
    ) {
        this.hash = Block.calculateHash(prevHash, height, data);
        // static : class안에서 사용하는 함수로 클래스 인스턴스가 없어도 부를 수 있다
    }
    static calculateHash(prevHash: string, height: number, data: string) {
        const toHash = `${prevHash} ${height} ${data}`;
    }
}
localStorage.setItem("a", "b");
