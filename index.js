const express = require("express");
const path = require("path")
const urlRoute = require("./router/url")
const staticeRoute = require("./router/staticerouter.js")
const userRoute = require("./router/user.js")

const {connectedMongooseDb} = require("./connection")

const app = express();
const PORT = 8001;
connectedMongooseDb("mongodb://127.0.0.1:27017/short-url").then(
   () =>  console.log("mongoose connected")
)

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/url",urlRoute);
app.use('/',staticeRoute);
app.use("/user",userRoute);


app.listen(PORT,() => console.log(`server is connected ${PORT}`))