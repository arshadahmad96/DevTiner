const express= require("express");

const app= express();
const {adminAuth}=require('./Middleware/auth');

app.get('/user/allData',adminAuth,(req,res,next)=>{
    console.log("user data");
    res.send("all data send")
});
app.get('/user',adminAuth,(req,res)=>{
    res.send("userData")
});
app.listen(3000,()=>{
    console.log("listening at port 3000")
});