const express= require("express");
const bodyparser = require("body-parser");
const ejs=require("ejs");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');
app.use(express.static("public"));
app.get("/",function(request,response){
  response.render("main");
});

app.listen(3005,function(request,response){
  console.log("server is running");
});
