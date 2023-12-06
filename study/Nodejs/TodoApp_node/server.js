const express = require("express");
const app = express();

// public폴더 내 파일들 index.html과 연결
app.use(express.static(__dirname + "/public"));

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
    res.send(result);
});
