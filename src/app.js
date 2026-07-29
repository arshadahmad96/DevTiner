const express= require("express");
require('./config/database');
const app= express();
const {adminAuth,userAuth}=require('./Middleware/auth');

app.get('/admin/allData',adminAuth,(req,res,next)=>{
    console.log("user data");
    res.send("admin all data send")
});
app.get('/admin',adminAuth,(req,res)=>{
    res.send("admin Data")
});
app.get('/user/allData',userAuth,(req,res,next)=>{
    res.send("user all data send");
})
app.listen(3000,()=>{
    console.log("listening at port 3000")
});