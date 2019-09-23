
const express = require("express");
const hbs = require("hbs");
const path = require("path"); // core module
const fs = require("fs");

var port = 8000;
var app = express();

 var json = fs.readFileSync("notation.json"); //reading json file

 var json_str = json.toString(); //converting buffer data to string

 var json_parse = JSON.parse(json_str); // parsing the json data
 console.log(json_parse);


app.set("view engine","hbs"); // the hsb engine search the index file in the views folder having extension hbs

app.get("/",(req,res)=>{ // note req should be in first and res in second
res.render("index",{Name: json_parse }); // render means load file index 
});

app.get("/about",(req,res)=>{
    res.render("about");
});

app.get("/contact",(req,res)=>{
    res.render("contact");
});


app.listen(port,()=>{
    console.log(`Running to the port ${port}`);
});
























// const directory = path.join(__dirname,'public'); // joining and making the current directory folder called public 
// app.use(express.static(directory)); // seting the public folder.

// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname +'/public/index.html'));
// });

// app.get("/about",(req,res)=>{
//     res.sendFile(path.join(__dirname +'/public/about.html'));
// });

// app.get("/contact",(res,req)=>{
//     res.sendFile(path.join(__dirname + "/public/contact.html"));
// });
// app.listen(port,()=>{
//     console.log("Listening to the Port " +port);
// });