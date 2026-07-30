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

app.get('/getuser',async (req,res)=>{
    try{
        const allUsers=await UserModel.find({});
        if(!allUsers) {res.status(400).send("User Not found")}
        else{res.status(200).send(allUsers)};
    }catch{
        res.status(500).send('Internal server error');
    }
    await UserModel.find({});
});

app.get('/feed',async (req,res)=>{
    try{
        const userFeed=await UserModel.findOne({firstName:req.body.firstName});
        console.log(userFeed)
        if(!userFeed) {res.status(400).send("User Not found")}
        else{res.status(200).send(userFeed)};
    }catch{
        res.status(501).send("Internal server error");
    }
});


connectDb().then(()=>{
    console.log("Data Base Connected");
    app.listen(3000,()=>{
    console.log("listening at port 3000")
});
}).catch((err)=>{
    console.log("Data Base Not Connected",err)
});