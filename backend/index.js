const express = require('express');
const {logReqRes} =require("./middlewares");
const userRouter =require("./routes/users");
const { handleConnectionDB } = require("./connection");



const app= express();
const port=3000;

// connection

handleConnectionDB("mongodb://127.0.0.1:27017/grocerymarket").then(()=>{console.log("db connected")});





// middleware plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/user",userRouter);

app.listen(port,()=>{
    console.log(`server start on port${port}`)
})