const express = require("express");
<<<<<<< HEAD
const urlRoute = require("./router/url")
=======
const path = require("path")
const urlRoute = require("./router/url")
const staticeRoute = require("./router/staticerouter.js")
>>>>>>> 457d44c (add server side rendering)

const {connectedMongooseDb} = require("./connection")

const app = express();
const PORT = 8001;
connectedMongooseDb("mongodb://127.0.0.1:27017/short-url").then(
   () =>  console.log("mongoose connected")
)
<<<<<<< HEAD
app.use(express.json());
app.use("/url",urlRoute);
=======

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use("/url",urlRoute);
app.use('/',staticeRoute);
>>>>>>> 457d44c (add server side rendering)


app.listen(PORT,() => console.log(`server is connected ${PORT}`))