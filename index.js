var express = require("express");//import express
var app = express();//create an app


//tells the app to uss the css file to something you can look at
app.use(express.static("css"));
//set the view engine so we can use ejs
app.set('view engine', 'ejs');

//start the app listening on a port and do a function
app.listen(process.env.PORT, function()
{
    console.log("server active");
});

//looks for url matching the string and does the function
// looks for a /
app.get("/", function(req,res){
    res.render("home.ejs")
});

// looks for a /
app.get("/mercury", function(req,res){
    res.render("mercury.ejs")
});

// looks for a /
app.get("/venus", function(req,res){
    res.render("venus.ejs")
});

// looks for a /
app.get("/earth", function(req,res){
    res.render("earth.ejs")
});

// looks for a /
app.get("/mars", function(req,res){
    res.render("mars.ejs")
});

// looks for a /
app.get("/jupiter", function(req,res){
    res.render("jupiter.ejs")
});

// regex star takes everything this should be last so that other options are hit first
app.get("*", function(req, res){
    res.render("error.ejs");
});