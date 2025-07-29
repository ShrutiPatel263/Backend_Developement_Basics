const express=require("express");
const app= express();
const path=require("path");


//Setting dynamic routes

app.get("/about/:username",function(req,res){
    res.send(`welcome ${req.params.username}`);
})


app.get("/about/:username/:age",function(req,res){
    res.send(`welcome ${req.params.username} of age ${req.params.age}`);
})


//setting server
app.listen(3000);