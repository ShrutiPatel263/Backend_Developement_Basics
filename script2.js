//Install express from npm -->npm i express
//Install nodemon (run code without need to refresh)
const express=require("express");
const app= express();

//Setting the routes
app.get("/",function(req,res){
    res.send("Hello World I am learning something new");
})

app.get("/about",function(req,res){
    res.send("I am learing Express.js");
})

//setting server
app.listen(3000);





