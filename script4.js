const express=require("express");
const app= express();

//Middleware--->do some work before reach to route
app.use(function(req,res,next){
    console.log("You are in middleware");
    next(); //Must write to go ahead to route
})
//Setting the routes
app.get("/",function(req,res,next){
    return next(new error("OMG!Went wrong"));
    res.send("Hello World I am learnig something new");
})

app.get("/about",function(req,res){
    res.send("I am learing Express.js");
})

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send("Something went wrong");
})
//setting server
app.listen(3000);