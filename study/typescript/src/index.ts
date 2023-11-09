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
        return crypto.createHash("sha256").update(toHash).digest("hex");
    }
}
class Blockchain {
    private blocks: Block[];
    constructor() {
        this.blocks = [];
    }
    private getPrevHash() {
        if (this.blocks.length === 0) return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    public addBlock(data: string) {
        const newBlock = new Block(
            this.getPrevHash(),
            this.blocks.length + 1,
            data
        );
        this.blocks.push(newBlock);
    }
    public getBlocks() {
        // return this.blocks; → HACKED
        return JSON.parse(JSON.stringify([...this.blocks]));
    }
}

const blockchain = new Blockchain();
blockchain.addBlock("First data");
blockchain.addBlock("Second data");
blockchain.addBlock("Third data");

blockchain.getBlocks().push(new Block("xoxoxoxo", 0, "HACKED:]"));
blockchain.getBlocks()[blockchain.getBlocks().length - 2].data =
    "YOU HACKED AGAINNN";

console.log(blockchain.getBlocks());
