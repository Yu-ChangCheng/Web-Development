import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";
import { futimes } from "fs";

const app = express();
const port = 3000;

var name = "";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGenerator);

function bandNameGenerator(req,res,next){
  console.log(req.body);
  name = req.body['street'] + req.body["pet"];
  next();
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Your band name is:</h1><h2>${name}✌️</h2>`);
});