const express= require("express");
const connectDb=require('./config/database');
const app= express();

const {adminAuth,userAuth}=require('./Middleware/auth');
const UserModel=require('./module/user');

app.use(express.json());
app.post('/signup',(req, res) => {
    const user= new UserModel(req.body);
    user.save().then((data)=>{
        res.status(200).send(data);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});



connectDb().then(()=>{
    console.log("Data Base Connected");
    app.listen(3000,()=>{
    console.log("listening at port 3000")
});
}).catch((err)=>{
    console.log("Data Base Not Connected",err)
});