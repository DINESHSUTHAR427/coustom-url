const express = require("express");
const urlRoute = require("./router/url")

const {connectedMongooseDb} = require("./connection")

const app = express();
const PORT = 8001;
connectedMongooseDb("mongodb://127.0.0.1:27017/short-url").then(
   () =>  console.log("mongoose connected")
)
app.use(express.json());
app.use("/url",urlRoute);


app.listen(PORT,() => console.log(`server is connected ${PORT}`))