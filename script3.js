const express=require("express");
const app= express();

//Middleware--->do some work before reach to route
app.use(function(req,res,next){
    console.log("You are in middleware");
    next(); //Must write to go ahead to route
})
//Setting the routes
app.get("/",function(req,res){
    res.send("Hello World I am learnig something new");
})

app.get("/about",function(req,res){
    res.send("I am learing Express.js");
})

//setting server
app.listen(3000);

