// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
const os = require("os");
const networkInterfaces = os.networkInterfaces();
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

//Request headers- User-Agent, Accept-Language

// your first API endpoint...
app.get("/api/whoami", function (req, res) {
  let ipadd = req.ip;
  let lang = req.headers["accept-language"];
  let softw = req.headers["user-agent"];
  // console.log(req.headers["user-agent"]);
  // console.log(req.headers["accept-language"]);
  // console.log(req.ip);

  res.status(200).json({ ipaddress: ipadd, language: lang, software: softw });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, "0.0.0.0", function () {
  console.log("Your app is listening on port " + listener.address().port);
});
