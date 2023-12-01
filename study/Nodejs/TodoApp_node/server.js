const express = require("express");
const app = express();

app.listen(8080, function () {
    console.log("Server Open : 8080");
});

/**
 * "/start"로 접속시 시작화면 보여주기
 * app.get("url", function(request, response){
 *  response.send("시작화면")
 * })
 */

app.get("/start", function (req, res) {
    res.send("시작화면입니다");
});
