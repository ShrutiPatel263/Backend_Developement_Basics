const express=require("express");
const app= express();
const path=require("path");

//Setting up the parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//setting up the static files 
app.use(express.static(path.join(__dirname,'public')));


//setting up ejs for ejs pages
//First install ejs
app.set('view engine','ejs');

//Setting the routes---->here we set up ejs so we can use render

//We have to create view folder then add ejs file & use render
app.get("/",function(req,res){
    res.render("index");
})


app.get("/about",function(req,res){
    res.send("I am learing Express.js");
})


//setting server
app.listen(3000);