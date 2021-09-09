// requiring all modules
const express=require('express');
const app = express();
const hbs=require('hbs');
const port=process.env.PORT || 8000;
const path = require('path');
const staticpath = path.join(__dirname,"../views");
console.log(staticpath);
app.set("views", staticpath);
app.set("view engine","hbs");

//routing
app.get("",(req,res)=>{
    res.render("index");
});

app.get("*",(req,res)=>{
    res.render("error404");
});

app.listen(port,()=>{
    console.log(`Listening to the requests made on ${port}`);
});


