adminAuth= ((req,res,next)=>{
    let token="xyz";
    if(token!=='xyz'){
        res.status(401).send("Not Auth");
    }else{
        next();
    }
})
userAuth = ((req,res,next)=>{
    let token = "zys";
    if(token ==="ABC"){
        next();
    }else{
        res.status(401).send("User not Authorised");
    }
})
module.exports={
    adminAuth,
    userAuth
}