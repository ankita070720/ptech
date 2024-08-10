const express = require('express');
const connectMongoDb =require('./connection');
const {logReqRes} =require("./middlewares");
const userRouter =require("./routes/users");


const app= express();
const port=3000;

// connection
connectMongoDb("mongodb://127.0.0.1:27017/grocerymarket");

// middleware plugin
app.use(express.urlencoded({extended:false}));
app.use(logReqRes("log.txt"));

//Routes
app.use("/user",userRouter);

app.listen(port,()=>{
    console.log(`server start on port${port}`)
})