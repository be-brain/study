const express = require("express");
const app = express();

app.listen(8080, function () {
    console.log("Server Open : 8080");
});
// public폴더 내 파일들 index.html과 연결
app.use(express.static(__dirname + "/public"));

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
    res.sendFile(__dirname + "/goal.html");
});
app.get("/done", function (req, res) {
    res.sendFile(__dirname + "/done.html");
});
app.get("/start", function (req, res) {
    res.send("시작화면입니다");
});
