adminAuth= ((req,res,next)=>{
    let token="xyz";
    if(token!=='xyz'){
        res.status(401).send("Not Auth");
    }else{
        next();
    }
})
module.exports={
    adminAuth
}