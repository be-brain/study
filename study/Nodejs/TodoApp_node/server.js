const express = require("express");
const app = express();

// public폴더 내 파일들 index.html과 연결
app.use(express.static(__dirname + "/public"));

/**
 * web template engine : 템플릿 양식과 데이터를 합쳐 HTML 문서를 출력하는 소프트웨어.
 * 서버사이드 템플릿엔진 : 서버에서 DB 혹은 API에서 가져온 데이터를 미리 정의된 Template에 넣어 Html을 그려서 클라이언트에 전달해주는 역할
 * 클라이언트사이드 템플릿엔진 : html 형태로 코드를 작성할 수 있으며, 동적으로 DOM을 그리게 해주는 역할
 */
// template engine(ejs)와 연결
app.set("view engine", "ejs");

// mongodb연결
const { MongoClient } = require("mongodb");
require("dotenv").config();

let db;
const url =
    "mongodb+srv://" +
    process.env.MONGODB_ID +
    encodeURIComponent(process.env.MONGODB_PW) +
    "@cluster0.czwqqpl.mongodb.net/?retryWrites=true&w=majority";

new MongoClient(url)
    .connect()
    .then((client) => {
        console.log("mongodb connecting success");
        db = client.db("node-board");
        app.listen(8080, function () {
            console.log("Server Open : http://localhost:8080");
        });
    })
    .catch((err) => {
        console.log(err);
    });

/**
 * "/start"로 접속시 시작화면 보여주기
 * app.get("url", function(request, response){
 *  response.send("시작화면")
 * })
 */
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/goal", function (req, res) {
    db.collection("post").insertOne({ title: "test1" });
    res.sendFile(__dirname + "/goal.html");
});
app.get("/done", function (req, res) {
    res.sendFile(__dirname + "/done.html");
});
app.get("/post", async (req, res) => {
    const result = await db.collection("post").find().toArray();
    res.render("myPost.ejs", { data: result }); // 응답은 1번만 가능하다(뒤에 res.send 몇개를 쓰던 맨 위 1개만 실행됨)
});
app.get("/time", (req, res) => {
    res.render("currentTime.ejs", { time: new Date() });
});
